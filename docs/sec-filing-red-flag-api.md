# Triage SEC filings for a public-company watchlist

Use [SEC Red Flag Monitor](https://apify.com/changeable_peddler/sec-red-flag-monitor) when an analyst needs to identify recent filings worth opening. It resolves a ticker or CIK and flags filing-type or item-code patterns such as late filings, non-reliance and executive changes. It returns a structured review row, not a conclusion that the company has done something wrong.

## Prepare one identified request

Start with the [one-ticker template](../examples/sec-red-flags-input.json). Replace its contact placeholder with a real address you are authorised to use for SEC fair-access identification **before running**:

```json
{
  "tickersOrCiks": ["AAPL"],
  "secContactEmail": "your-contact@example.com",
  "lookbackDays": 90,
  "clusterWindowDays": 5,
  "minOwnershipFilingsForCluster": 3,
  "concurrency": 1
}
```

The address is sent to SEC in the request identification. Keep your completed input private; do not publish it as a shared task or commit it here. The placeholder is not a production contact or a ready-to-run identified request.

Open the Actor in Apify Console, inspect the Pricing tab and set a spending limit for one ticker/CIK report. Each attempted report is billed, including an `API_ERROR` row, so check the existing run and `RUN_SUMMARY` before retrying. A failed source lookup does not establish that there were no relevant filings.

## Read the filing rather than the score alone

Confirm the resolved company in `disambiguation`, then inspect `metrics.filingsInspected` and the source evidence in `highlights`. The lookback determines which recent filings can contribute; a short or incomplete response is not an exhaustive company history.

An ownership-filing cluster counts filings without establishing insider buying, transaction direction or unusual trading intent. Likewise, an executive-change filing does not by itself establish misconduct or financial distress. Use the flags to prioritise source reading rather than making a trading or credit decision from the score.

The [output illustration](sample-outputs-and-case-studies.md#sec-red-flag-monitor) shows the fields with invented values, not independently verified live coverage. The Actor creates no watchlist schedule, comparison baseline or alerts automatically, so preserve source links and retrieval dates for any review you repeat later. This tool is not investment or legal advice.
