# Choose a public-data check for a vendor review

A vendor review can involve several different questions. Choose the Actor that answers the one in front of you, rather than buying a compulsory suite.

| Evidence you have | Next check | Read before running |
|---|---|---|
| A package version, lockfile or SBOM | Identify component-level registry and vulnerability evidence | [OSS package-review guide](oss-supply-chain-risk-api.md) |
| A public-company ticker or CIK | Flag recent SEC filings for an analyst to read | [SEC filing guide](sec-filing-red-flag-api.md) |
| A company domain | Investigate possible Form D and developer signals | [Company-research guide](startup-funding-signals-api.md) |

These are source-linked triage tools, not substitutes for security, legal or financial due diligence. Their scores describe different heuristics and should not be combined into a single probability of vendor failure.

## Keep the first run small

Use one component or company while you inspect the output. An SBOM can create many separately billed component reports. Review the selected Actor's Pricing tab and spending limit, and use a real private contact address for SEC-backed requests. The [small-input selector](../README.md#choose-a-research-task) links to the appropriate template.

Each attempted report is billed, including an `API_ERROR` row. Review failed or uncertain runs before retrying; a row without usable source evidence is not a successful assessment.

## Hand off evidence, not just a score

Preserve the original input, resolved identity and source links with the retrieval date. A reviewer should be able to open the relevant advisory or filing and see why the row needs attention. The [handoff guide](vendor-due-diligence-workflow.md) explains how to keep separate evidence types in a queue.

For care-sector report metadata, use the independent [CQC spreadsheet guide](cqc-care-home-report-links-csv.md). It has a different provider-grouped schema and does not assess clinical findings or care quality. None of these guides creates a schedule, comparison history, alerts or outreach.
