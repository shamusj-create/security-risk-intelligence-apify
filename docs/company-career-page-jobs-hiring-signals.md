# Extract company career-page jobs and hiring signals for review

Preparing a recruiting-research spreadsheet from a list of company career pages? [Career Page Hiring Signal Extractor](https://apify.com/changeable_peddler/career-page-hiring-signal-extractor) returns role-like links and configured hiring-related mentions from fetched public pages. Use the source-linked candidates to decide which vacancies deserve a manual check.

The output is a bounded snapshot. It is useful for a review shortlist; it does not provide a complete jobs feed, verify that a vacancy is still open or establish a company's growth, budget or buying intent.

## Start with one careers or jobs page

Open the Actor, paste the following input and review its Pricing tab before execution. The URL is a public example input, not a promised result or customer case study:

```json
{
  "startUrls": [{ "url": "https://www.python.org/jobs/" }],
  "maxPagesPerSite": 3,
  "concurrency": 1,
  "requestTimeoutSecs": 10,
  "includeEvidence": true
}
```

For company research, replace the URL with the company's relevant public careers page. A direct page gives the check a clearer starting point than an unrelated homepage. External applicant-tracking boards can fall outside the submitted site's allowed domain; submit a relevant permitted board URL separately when needed.

## Keep the source with each candidate

Inspect `status`, `errors`, `sourceUrls` and `coverage` before exporting. For each returned candidate in `extracted.jobs`, keep its `title`, `url` and the report's `retrievedAt` timestamp together. These are conservative role-like anchor matches on job-detail paths, rather than verified vacancy records.

Open each candidate URL to check the employer, role, location, closing date and current application status. An extracted role title does not supply those facts automatically. Configured department, remote-work or applicant-tracking-system mentions may appear in `signals` and `findings`; a mention can occur without a current vacancy.

A simple review sheet can use these columns:

| Column | Source or next step |
|---|---|
| Company website | Your submitted research target |
| Candidate role title | `extracted.jobs[].title` |
| Candidate job URL | `extracted.jobs[].url` |
| Retrieved at | `retrievedAt` |
| Vacancy confirmed | Your manual check of the linked page |
| Reviewer notes | Your source-backed location, date and context notes |

An empty `extracted.jobs` array does not prove there are no jobs. JavaScript-rendered boards, unusual paths, some external applicant-tracking systems and non-English role titles may be missed. This version does not compare stored runs or send new-vacancy alerts.

## Bound the first check

The Actor reads static public responses without executing browser JavaScript or logging in. Each website check is bounded to 20 seconds, 1 MiB downloaded and 4 MiB decoded text. Redirects and failed requests consume the `maxPagesPerSite` HTTP-request allowance. Inputs accept at most 100 combined URL/domain entries, including duplicates.

The Actor event fees are **$0.002 per website attempt**, plus **$0.008 per qualifying useful report**: **$0.010** when both apply, separate from applicable platform charges. A report fee requires `FOUND` or `PARTIAL` with useful detected signals or extracted evidence. Empty or failed probes ordinarily incur only the attempt fee. Set a run spending limit before starting and inspect `RUN_SUMMARY` before retrying an uncertain result, because a new check can incur another fee.

For another research question, return to the [website evidence check selector](website-evidence-checks.md) or [research-task index](../README.md). Each Actor is a separate product; these guides create no schedules or messages.
