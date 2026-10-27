# Investigate Form D and developer signals for a company domain

Use [Startup Funding Signal Report](https://apify.com/changeable_peddler/startup-funding-signal-report) to assemble public clues for a company-research queue. It searches for possible SEC Form D matches and can add available GitHub, Hacker News and domain-registration signals. A domain-derived name is a search starting point, not verified company identity.

## Check one company first

Start with the [one-domain template](../examples/startup-funding-input.json), then supply a real contact email you are authorised to use for SEC fair-access requests:

```json
{
  "companies": ["stripe.com"],
  "secContactEmail": "your-contact@example.com",
  "includeGithub": true,
  "includeHackerNews": true,
  "maxSecFilings": 2,
  "concurrency": 1
}
```

The placeholder is not a production identity. The completed address is sent to SEC in request identification, so keep your input private and out of public tasks or repositories. Replace the domain with the company you need to investigate.

Review the Pricing tab in Apify Console and set a limit for one company report. Each attempted company report is billed, including an `API_ERROR` row. Inspect the existing output and `RUN_SUMMARY` before retrying: an upstream failure is not a valid zero-signal assessment.

## Verify the match before enriching a CRM

Read `disambiguation` and the matched entities before interpreting any funding total. Similar names can identify the wrong company, and a domain is not a registry identity. Check the original filings, dates and entity details rather than accepting the summary as a verified funding event.

A Form D filing concerns an offering; it does not necessarily establish a completed funding round or today's capital position. Amendments and overlapping matches need deduplication before you sum amounts. Missing filings do not prove that a company is unfunded or illegitimate.

GitHub activity and Hacker News mentions are public attention or development clues, not verified revenue, customers or product-market fit. The score is a heuristic for deciding what to research next. See the [illustrative output](sample-outputs-and-case-studies.md#startup-funding-signal-report) for fields, not a customer case study or live proof of coverage.

Save source links and retrieval dates with the review. This Actor creates no outreach, monitoring schedule or alerts, and its output is not investment advice.
