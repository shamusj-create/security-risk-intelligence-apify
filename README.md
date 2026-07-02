# Security Risk Intelligence Suite for Apify

Run repeatable vendor due-diligence checks with Apify: SBOM and package risk, Docker image risk, SEC filing red flags, and startup funding or traction signals.

Try on Apify:

- [OSS Supply Chain Risk Report](https://apify.com/changeable_peddler/oss-supply-chain-risk-report)
- [SEC Red Flag Monitor](https://apify.com/changeable_peddler/sec-red-flag-monitor)
- [Startup Funding Signal Report](https://apify.com/changeable_peddler/startup-funding-signal-report)

This repository contains copy-paste inputs, tutorials, and JavaScript examples for a three-Actor suite that turns public package, container, company, and filing data into structured risk intelligence datasets.

Use it if you need to:

- Audit a vendor lockfile, SBOM, package list, or Dockerfile.
- Monitor public vendors for SEC filing red flags.
- Enrich startup domains with funding and traction signals.
- Export structured rows into a spreadsheet, GRC queue, CRM, or internal dashboard.

## Actors

- [OSS Supply Chain Risk Report](https://apify.com/changeable_peddler/oss-supply-chain-risk-report): PyPI, npm lockfile, SBOM, OSV, and Docker image risk reporting.
- [SEC Red Flag Monitor](https://apify.com/changeable_peddler/sec-red-flag-monitor): SEC restatement, late filing, executive-change, restructuring, and ownership-cluster monitoring.
- [Startup Funding Signal Report](https://apify.com/changeable_peddler/startup-funding-signal-report): Form D, GitHub, Hacker News, RDAP, and public traction signal enrichment.

If an Actor link is not visible yet, the Actor has not been published to Apify Store.

## Start Here

- [How to automate vendor and dependency risk checks with Apify](docs/vendor-risk-automation-with-apify.md)
- [OSS supply-chain risk API tutorial](docs/oss-supply-chain-risk-api.md)
- [SEC filing red-flag API tutorial](docs/sec-filing-red-flag-api.md)
- [Startup funding signals API tutorial](docs/startup-funding-signals-api.md)
- [Vendor due-diligence workflow tutorial](docs/vendor-due-diligence-workflow.md)

## Example Inputs

- [OSS package, lockfile, and Docker input](examples/oss-risk-input.json)
- [SEC red-flag watchlist input](examples/sec-red-flags-input.json)
- [Startup funding signal input](examples/startup-funding-input.json)

## JavaScript Example

Install dependencies:

```bash
npm install
```

Run the suite:

```bash
APIFY_TOKEN=your_token_here npm run run-suite
```

The script in [examples/run-suite.js](examples/run-suite.js) calls the three Actors, reads their datasets, and prints a compact summary with `input`, `status`, `score`, `confidence`, and `summary`.

## Output Fields To Review First

- `status`: whether the target was analyzed cleanly.
- `score`: normalized risk or opportunity score.
- `confidence`: confidence in the resolved company, ticker, package, image, or component.
- `summary`: short human-readable result.
- `recommendations`: suggested next actions.
- `metrics`: normalized structured values.
- `disambiguation`: how the Actor resolved a package, ticker, domain, or company.
- `highlights`: filing, vulnerability, package, image, or public-signal evidence.

## Common Workflows

- Audit a vendor Dockerfile and lockfile before security review.
- Monitor public vendors or acquisition targets for SEC filing red flags.
- Enrich startup domains with public funding and traction signals.
- Build a procurement review queue from repeatable Apify datasets.
- Export results into a spreadsheet, GRC tool, CRM, or internal dashboard.

## Notes

SEC-backed examples require a real `secContactEmail` in production. The placeholder `your-contact@example.com` is only a template value.
