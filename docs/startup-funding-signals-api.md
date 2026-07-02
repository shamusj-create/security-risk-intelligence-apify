# Startup Funding Signals API With Apify

Startup Funding Signal Report turns public company and domain signals into a structured startup research row.

Use it when you need to enrich:

- CRM company domains
- conference attendee lists
- accelerator or cohort lists
- investor research targets
- B2B lead queues
- early vendor review queues

## Example Input

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

Use a real contact email for SEC fair-access identification.

## CLI

```bash
apify call changeable_peddler/startup-funding-signal-report --input-file examples/startup-funding-input.json --output-dataset
```

## What To Review

- `score`: normalized signal score.
- `confidence`: confidence in company/domain resolution.
- `summary`: funding and traction overview.
- `metrics.formDFilings`: matching Form D filings.
- `metrics.hnMentions`: Hacker News mention count.
- `metrics.githubPublicRepos`: public GitHub repository count.
- `metrics.domainAgeDays`: domain age signal.
- `disambiguation`: query stem, domain, SEC query, and matched Form D entities.

See a compact example row in [sample outputs and case studies](sample-outputs-and-case-studies.md#startup-funding-signal-report).

## Buyer Workflows

- lead scoring
- market mapping
- investor research
- startup vendor review
- public traction enrichment for CRM rows
