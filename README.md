# Public-data research examples for Apify

Choose a tool for the record you need to review: a software dependency, a public-company filing, a startup's public signals or a care provider's CQC report links. These are independent products. You do not need to run or purchase them together.

For privacy policies, contract clauses, trust-centre claims, disclosure contacts, cookie-tool mentions, legal identifiers or developer resources, use the [website evidence check selector](docs/website-evidence-checks.md). It also covers SaaS price strings, company career-page hiring signals and newsroom contact research. Choose the check that fits your question and review its limits and fees.

Preparing a recruiting-research spreadsheet? The [career-page jobs and hiring-signals guide](docs/company-career-page-jobs-hiring-signals.md) shows a small input and the fields to keep for manual vacancy review.

Use these Actors from an AI assistant with the [AI chat setup and task catalog](https://github.com/shamusj-create/seo-dataforseo-apify/blob/main/docs/use-apify-actors-in-ai-chat.md). It covers public website evidence, filing research, software dependencies and CQC report links.

## Choose a research task

| Your task | Actor and guide | Billing unit | Small input |
|---|---|---|---|
| Triage a pinned dependency or vendor SBOM | [OSS Supply Chain Risk Report](https://apify.com/changeable_peddler/oss-supply-chain-risk-report) · [package-review guide](docs/oss-supply-chain-risk-api.md) | One component report, not one whole SBOM | [One package](examples/oss-single-package-input.json) |
| Flag SEC filings for an analyst to read | [SEC Red Flag Monitor](https://apify.com/changeable_peddler/sec-red-flag-monitor) · [filing-review guide](docs/sec-filing-red-flag-api.md) | One ticker/CIK report | [One ticker](examples/sec-red-flags-input.json) |
| Investigate a company's possible Form D and developer signals | [Startup Funding Signal Report](https://apify.com/changeable_peddler/startup-funding-signal-report) · [company-research guide](docs/startup-funding-signals-api.md) | One company report | [One domain](examples/startup-funding-input.json) |
| Export source-linked care home or homecare inspection-report metadata | [CQC Report Finder](https://apify.com/changeable_peddler/cqc-report-finder) · [care-provider spreadsheet guide](docs/cqc-care-home-report-links-csv.md) | $0.01 per provider delivered, plus platform usage | [One public location](examples/cqc-report-lookup-input.json) |

Check the chosen Actor's Pricing tab and set a spending limit before starting. A supplied lockfile or SBOM can create many separately billed component reports. SEC-backed products need a real contact email for SEC fair-access identification; replace the template value in the example and keep it out of public tasks or repositories.

## Inspect an example first

The [worked examples](docs/sample-outputs-and-case-studies.md) explain the fields and their limits. The [dated OSS artifact](examples/live/oss-supply-chain-risk-report.json) is from a controlled owner test, not a customer result or current vulnerability assessment. SEC and startup outputs on that page are illustrations.

The [CQC guide](docs/cqc-care-home-report-links-csv.md) starts with a public care-service lookup verified on 27 October 2026. It explains the difference between checking a known location and searching a dated monthly ratings snapshot. This tool does not read clinical report text or assess the quality of care.

## Run one selected example

The simplest first run is in Apify Console: follow a product link, review its guide, paste the small input and check the Pricing tab. A source error or empty result is not a successful assessment, so inspect the run summary before retrying.

For the three company/software Actors, the [JavaScript runner](examples/run-suite.js) can call one selected product after you install this repository's dependencies:

```bash
npm install
npm run run-suite -- --list
npm run run-suite -- --actor oss-supply-chain-risk-report --preview
# With APIFY_TOKEN set privately:
npm run run-suite -- --actor oss-supply-chain-risk-report
```

Listing and previewing work without a token and start nothing. The OSS example uses [one pinned package](examples/oss-single-package-input.json) with a $0.02 Apify run charge limit. Review current pricing, including any separate platform usage. To choose a different run limit, pass `--max-usd` with a positive amount. The runner starts only the selected Actor and shows its run ID and up to three output rows.

For either SEC-backed example, set `SEC_CONTACT_EMAIL` privately to a real address you are authorised to use. The runner adds it to that request without editing the public template. CQC has its own [Console example](docs/cqc-care-home-report-links-csv.md).

## Use the evidence in your own review

For the original three products, inspect `status` and `disambiguation` before relying on `score`. Read the supporting source records in `highlights` and `metrics`; a heuristic score is not a probability of loss, wrongdoing or commercial success. CQC has a different, provider-grouped schema described in its guide.

Export only the fields your review needs and preserve the source links and retrieval date. The [vendor review selector](docs/vendor-risk-automation-with-apify.md) helps choose the relevant check, while the [handoff guide](docs/vendor-due-diligence-workflow.md) covers keeping findings separate in a review queue. These examples create no schedules, alerts or outreach.

For keyword demand, competitor Google ads, Google Shopping prices or Google Play keyword results, see the separate [SEO, ads and app research tools](https://github.com/shamusj-create/seo-dataforseo-apify#choose-a-task). Their provider-backed reports answer different questions from these public-website checks.
