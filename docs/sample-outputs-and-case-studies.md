# Sample outputs and case studies

These shortened examples show the dataset shape a buyer gets back from the Security Risk Intelligence Suite. Real runs include the same top-level fields, plus larger `highlights`, `metrics`, `sources`, and `checkedAt` payloads.

The values below are illustrative demo values for showing output structure. Use live Actor runs for current evidence.

## Case study: vendor intake triage

A procurement or security team can run the suite against a vendor packet:

- Run OSS Supply Chain Risk Report on the supplied SBOM, lockfile, package list, or Dockerfile.
- Run SEC Red Flag Monitor when the vendor, parent, customer, or acquisition target is public.
- Run Startup Funding Signal Report when the company is private or startup-like.

The shared fields make the output easy to combine: `input`, `status`, `score`, `confidence`, `summary`, `recommendations`, `highlights`, `metrics`, and `disambiguation`.

## OSS Supply Chain Risk Report

Use this when the buyer wants a review-ready dependency or container risk row, not just a raw package lookup.

```json
{
  "input": "requests==2.31.0",
  "reportType": "oss-supply-chain-risk-report",
  "status": "ANALYZED",
  "score": 78,
  "confidence": 95,
  "summary": "requests: analyzed 2.31.0, latest 2.32.4, 2 OSV vuln(s), 0 recent NVD keyword match(es).",
  "recommendations": [
    "Review OSV vulnerabilities affecting the analyzed version before adding or upgrading this dependency.",
    "Upgrade available: compare the analyzed version with the latest PyPI release."
  ],
  "highlights": [
    {
      "type": "OSV",
      "id": "GHSA-demo",
      "summary": "Shortened vulnerability evidence for the analyzed package version."
    }
  ],
  "disambiguation": {
    "ecosystem": "PyPI",
    "packageName": "requests",
    "requestedVersion": "2.31.0",
    "analyzedVersion": "2.31.0",
    "latestVersion": "2.32.4",
    "componentSource": "input"
  },
  "metrics": {
    "ecosystem": "PyPI",
    "osvVulnerabilities": 2,
    "currentVersionAffected": true,
    "upgradeAvailable": true,
    "nvdKeywordMatches": 0
  }
}
```

Buyer takeaway: the Actor packages vulnerability, freshness, package-resolution, and next-action fields into one exportable row.

Try it on Apify: [OSS Supply Chain Risk Report](https://apify.com/changeable_peddler/oss-supply-chain-risk-report).

## SEC Red Flag Monitor

Use this when the buyer needs a public-company watchlist row rather than manually reading recent filings.

```json
{
  "input": "EXMPL",
  "reportType": "sec-red-flag-monitor",
  "status": "ANALYZED",
  "score": 15,
  "confidence": 95,
  "summary": "EXMPL: 1 red flag finding(s) across 64 filing(s) in 180 days.",
  "recommendations": [
    "Review underlying filings before making trading, credit, or outreach decisions.",
    "Prioritize CRITICAL and HIGH findings for analyst review."
  ],
  "highlights": [
    {
      "severity": "MEDIUM",
      "type": "OWNERSHIP_FILING_CLUSTER",
      "filingDate": "2026-06-15",
      "count": 4,
      "windowDays": 5
    }
  ],
  "disambiguation": {
    "input": "EXMPL",
    "resolvedTicker": "EXMPL",
    "resolvedCik": "0000000000",
    "resolvedCompanyName": "Example Public Company Inc."
  },
  "metrics": {
    "filingsInspected": 64,
    "findings": 1,
    "criticalFindings": 0,
    "highFindings": 0,
    "ownershipFilings": 22
  }
}
```

Buyer takeaway: the Actor converts restatements, late filings, executive changes, restructuring items, and insider-filing clusters into a sortable monitoring row.

Try it on Apify: [SEC Red Flag Monitor](https://apify.com/changeable_peddler/sec-red-flag-monitor).

## Startup Funding Signal Report

Use this when the buyer has a list of startup domains and needs funding or traction signals for lead scoring, diligence, or market mapping.

```json
{
  "input": "example-startup.com",
  "reportType": "startup-funding-signal-report",
  "status": "ANALYZED",
  "score": 66,
  "confidence": 100,
  "summary": "example-startup.com: 2 Form D filing(s), $5000000 sold, 180 HN mentions, 120 GitHub repos.",
  "recommendations": [
    "Prioritize for sales or diligence: SEC Form D funding evidence found.",
    "Use GitHub activity as a current-building signal.",
    "Use Hacker News traction as developer-market awareness evidence."
  ],
  "highlights": [
    {
      "type": "FORM_D",
      "entityName": "Example Startup Inc.",
      "filingDate": "2026-04-10",
      "totalAmountSold": 5000000
    },
    {
      "type": "GITHUB_REPO",
      "name": "demo-repo",
      "stars": 420,
      "pushedAt": "2026-06-24T12:00:00Z"
    }
  ],
  "disambiguation": {
    "queryStem": "example startup",
    "domain": "example-startup.com",
    "secQuery": "example startup",
    "formDMatchedEntities": [
      {
        "entityName": "Example Startup Inc.",
        "filingDate": "2026-04-10",
        "amountSold": 5000000
      }
    ]
  },
  "metrics": {
    "formDFilings": 2,
    "latestFundingDate": "2026-04-10",
    "totalAmountSold": 5000000,
    "hnMentions": 180,
    "githubPublicRepos": 120,
    "githubRecentRepoUpdates": 9
  }
}
```

Buyer takeaway: the Actor joins SEC Form D evidence, developer-market attention, GitHub activity, and domain signals into a single company research row.

Try it on Apify: [Startup Funding Signal Report](https://apify.com/changeable_peddler/startup-funding-signal-report).

## Export pattern

After a run finishes, export the default dataset as JSON, CSV, or Excel from Apify. For most review queues, start with:

- `input`
- `status`
- `score`
- `confidence`
- `summary`
- `recommendations`
- `metrics`
- `disambiguation`

Then add the longer evidence fields only for rows that need analyst review.
