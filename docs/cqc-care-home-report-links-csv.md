# Export CQC care home and homecare report links to CSV

Use [CQC Report Finder](https://apify.com/changeable_peddler/cqc-report-finder) when you need a source-linked spreadsheet for a care-provider review in England. It gathers available report-publication dates and ratings, then groups matched care locations beneath their provider. You do not need a CQC API key or paid data subscription.

The fee is **$0.01 per provider delivered, plus Apify platform usage**. Several matched locations belonging to one provider create one provider fee in that run. Empty results and source errors create no provider-report fee, but platform usage still applies. Free Apify accounts can use their normal platform allowance.

## Start with one known care service

Open the [ready-to-edit one-location example](https://apify.com/changeable_peddler/cqc-report-finder/examples/cqc-care-home-report-lookup), or paste the [small lookup input](../examples/cqc-report-lookup-input.json) into the Actor in Apify Console:

```json
{
  "mode": "LOOKUP",
  "locationIds": ["1-13361514096"],
  "maxLocationsToCheck": 1,
  "maxProviders": 1
}
```

This is [Regency Park's public CQC location](https://www.cqc.org.uk/location/1-13361514096). On 27 October 2026, a controlled owner test returned Bright Futures Care Limited, one matched location, a Good overall rating and a report published on 7 August 2026. It is a functionality example, not a customer, endorsement or evidence of an outcome. Source data can change.

Review the Pricing tab and set a spending limit that covers the provider fee and platform usage before running. Replace the example with up to 100 IDs copied from the CQC location URLs you need. Lookup checks the latest observable public metadata rather than reconstructing a complete inspection history.

## Download the right spreadsheet

After the run, open **Provider overview** for the grouped list or **Reports and locations** for a flat view. The underlying JSON has one row per provider with nested `reports` entries. Use the corresponding Provider CSV or Report CSV download link for the layout you need.

| Field | How to use it |
|---|---|
| `providerId`, `providerName`, `matchedLocations` | Identify the provider and size of the matched group. |
| `latestReportPublishedAt`, `ratings` | Review the available dates and ratings, without assuming they describe the same update. |
| `reports[].locationId`, `locationName` | Identify each matched care service. |
| `reports[].reportUrl`, `reportPublishedAt` | Open the report and verify its publication date at source. |
| `checkedAt`, `sourcePublishedAt`, `coverageNote` | Distinguish retrieval time from source freshness and incomplete coverage. |

A missing date or empty result does not establish that a service is unregistered or has no reports. If pages fail or a limit is reached, check `RUN_SUMMARY` before treating the shortlist as complete. An incomplete or uncertain billing summary should be checked against the dataset and platform charge history before you repeat a run.

## Use discovery for a dated shortlist

Choose `DISCOVERY` when you do not already have location IDs. Start with a small `maxLocationsToCheck` and `maxProviders`, then select a report-publication lookback and optional rating, CQC region or service-type filters. Discovery is scoped to adult social care, not hospitals, dentists or GPs.

Its candidate list comes from CQC's monthly ratings publication, not a complete daily stream of new reports. The Actor rechecks candidate pages, but a new service or report can be absent from that snapshot. Read the source date and coverage notes, and prefer lookup for a particular known service. Discovery must process the national workbook even for a small shortlist, so it can use more platform resources than lookup.

An optional discovery radius uses straight-line distance to care locations, not driving distance. Its secret origin postcode is sent to Postcodes.io for geocoding and omitted from output, so leave it blank if region filters suffice.

## Boundaries and source rights

This independent tool is not affiliated with CQC. It does not return full report text, clinical findings, personal contacts, lead scores or rating-change alerts. Ratings and report dates can refer to different source updates, so open the CQC links before making a consequential decision. It is not a care-quality assessment or clinical advice.

For one manual lookup, [CQC's own search](https://www.cqc.org.uk/) may be sufficient. Official downloads are available on [Using CQC data](https://www.cqc.org.uk/about-us/transparency/using-cqc-data); this Actor charges for processing and organisation, not ownership of public information. Source: Care Quality Commission. Contains public sector information licensed under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/). Personal data and third-party rights are not covered by that licence.
