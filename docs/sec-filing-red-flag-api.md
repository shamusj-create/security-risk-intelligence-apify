# SEC Filing Red Flag API With Apify

SEC Red Flag Monitor turns public SEC filing data into a structured watchlist row for each ticker or CIK.

Use it when you need to monitor:

- restatements and non-reliance signals
- late filings
- restructuring items
- material impairment items
- executive changes
- clustered ownership filings

## Example Input

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

Use a real contact email for SEC fair-access identification.

## CLI

```bash
apify call changeable_peddler/sec-red-flag-monitor --input-file examples/sec-red-flags-input.json --output-dataset
```

## What To Review

- `score`: normalized red-flag score.
- `confidence`: confidence in ticker or CIK resolution.
- `summary`: short filing-risk summary.
- `metrics.filingsInspected`: filings included in the review window.
- `metrics.findings`: total findings.
- `metrics.ownershipFilings`: ownership filings counted.
- `highlights`: specific filing evidence.
- `disambiguation`: resolved ticker, CIK, and company name.

## Buyer Workflows

- public vendor watchlists
- public customer or partner monitoring
- public-company diligence before procurement review
- investor research queues
- sales-trigger monitoring for public accounts
