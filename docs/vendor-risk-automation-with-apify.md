# How to automate vendor and dependency risk checks with Apify

Vendor review often starts with the same questions: what dependencies are in use, whether a public company has recent filing red flags, and whether a startup has public funding or traction signals. The Security Risk Intelligence Suite turns those checks into repeatable Apify datasets.

This workflow uses three public Apify Actors:

- [OSS Supply Chain Risk Report](https://apify.com/changeable_peddler/oss-supply-chain-risk-report) for SBOM, lockfile, package, and Docker image risk.
- [SEC Red Flag Monitor](https://apify.com/changeable_peddler/sec-red-flag-monitor) for public-company filing risk.
- [Startup Funding Signal Report](https://apify.com/changeable_peddler/startup-funding-signal-report) for startup funding and traction signals.

## 1. Audit open-source and container evidence

Start with a dependency, lockfile, Dockerfile, or SBOM check.

```json
{
  "pypiPackageVersions": ["requests==2.31.0"],
  "requirementsText": "flask==2.2.2\nurllib3==1.26.18",
  "dockerfileText": "FROM redis:7.2",
  "includeNvdKeywordSearch": false,
  "concurrency": 1
}
```

Review these fields first:

- `score`: normalized package or image risk score.
- `confidence`: confidence in the resolved package, version, or image.
- `summary`: short review-ready finding.
- `recommendations`: suggested next actions.
- `metrics`: vulnerability, freshness, popularity, and metadata signals.
- `disambiguation`: how the Actor resolved the input.

## 2. Check public-company filing risk

For public vendors, customers, partners, or acquisition targets, run a filing red-flag check.

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

Use the result as a watchlist row for restatements, late filings, executive changes, restructuring signals, and insider-filing clusters.

## 3. Enrich startup domains

For private companies and startup vendors, run public funding and traction enrichment.

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

Review Form D evidence, Hacker News mentions, GitHub organization activity, domain age, and disambiguation metadata.

## 4. Export into your review queue

Each Actor writes structured rows to its default dataset. Export JSON or CSV from Apify and combine rows in a spreadsheet, GRC queue, CRM enrichment job, or internal dashboard.

Common review flow:

1. Run OSS Supply Chain Risk Report for dependency evidence.
2. Run SEC Red Flag Monitor for public-company targets.
3. Run Startup Funding Signal Report for startup or private-company targets.
4. Sort rows by `score`, review `confidence`, then read `summary` and `recommendations`.

## Example use cases

- Vendor due diligence before a security questionnaire.
- Procurement risk triage for public and private vendors.
- Investor research queues for public-company and startup signals.
- Lead qualification based on public funding, traction, and technical-risk evidence.

SEC-backed examples require a real `secContactEmail` in production. The placeholder value is only a template.
