# Choose a public website evidence check

Preparing a vendor review, SaaS comparison or company-research spreadsheet? Start with the question you need to answer and the public page most likely to contain that evidence. These eleven public Apify Actors cover different tasks. Select the one that fits your question, then inspect its sources before using the result in a decision.

## Review privacy policies and company identity

Use these checks to collect material for a human review. Published language and identifiers can guide that review; they do not establish compliance or a company's legal standing.

| Your question | Actor | Report fee | Attempt + qualifying report |
|---|---|---:|---:|
| What does the privacy policy say about rights, retention or transfers? | [Privacy Policy Risk Scanner](https://apify.com/changeable_peddler/privacy-policy-risk-scanner) | $0.018 | $0.020 |
| Are a company name and VAT or registry identifiers available? | [EU Legal Entity Extractor](https://apify.com/changeable_peddler/eu-legal-entity-extractor) | $0.008 | $0.010 |
| Where does the site's terms text mention renewal, arbitration or refunds? | [Terms Risk Clause Extractor](https://apify.com/changeable_peddler/terms-risk-clause-extractor) | $0.008 | $0.010 |
| Which public pages mention SOC 2, ISO 27001, DPAs or subprocessors? | [Trust Center Compliance Extractor](https://apify.com/changeable_peddler/trust-center-compliance-extractor) | $0.006 | $0.008 |
| Which consent tools, analytics tags or advertising pixels are mentioned in static HTML and headers? | [Cookie Consent Tracker Scanner](https://apify.com/changeable_peddler/cookie-consent-tracker-scanner) | $0.003 | $0.005 |

Terms matches are starting points for a clause review, not conclusions about enforceability. Trust-centre matches record published claims, not verified certifications. The cookie check does not execute scripts or click a banner, so it cannot establish whether a tracker fires before consent.

## Find public technical resources

Choose these when the task concerns declared crawler policies or resources for an integration.

| Your question | Actor | Report fee | Attempt + qualifying report |
|---|---|---:|---:|
| What AI-crawler rules or policy files does this site publish? | [AI Crawler Policy Scanner](https://apify.com/changeable_peddler/ai-crawler-policy-scanner) | $0.003 | $0.005 |
| Where are documentation, OpenAPI-like links or API references? | [API Docs and OpenAPI Discovery](https://apify.com/changeable_peddler/api-docs-openapi-discovery) | $0.005 | $0.007 |
| What security.txt contacts, expiry values or disclosure-policy links are published? | [Security.txt VDP Checker](https://apify.com/changeable_peddler/security-txt-vdp-checker) | $0.001 | $0.003 |

Security.txt evidence does not establish permission to test a website or complete RFC 9116 conformance. API-like links still need access and contract checks before an integration.

## Research prices, hiring pages and newsroom sources

Use these when preparing a comparison or research shortlist from a company's public pages.

| Your question | Actor | Report fee | Attempt + qualifying report |
|---|---|---:|---:|
| What public price strings and trial or enterprise-plan language can I review? | [SaaS Pricing Page Extractor](https://apify.com/changeable_peddler/saas-pricing-page-extractor) | $0.005 | $0.007 |
| Which role-like links and hiring-related signals appear on a career page? | [Career Page Hiring Signal Extractor](https://apify.com/changeable_peddler/career-page-hiring-signal-extractor) · [career-page jobs guide](company-career-page-jobs-hiring-signals.md) | $0.008 | $0.010 |
| Where are newsroom, press-release or media-kit links and public contact strings? | [Press Newsroom Contact Extractor](https://apify.com/changeable_peddler/press-newsroom-contact-extractor) | $0.008 | $0.010 |

Price strings are not reliable plan-to-price mappings or complete purchase costs. Role-like links need a manual vacancy check and are not verified job counts or buying-intent scores. Press contacts may be general footer addresses; they are not deliverability-verified contacts or permission to send messages.

## Start with one relevant page

This example checks Apify's public API documentation. Paste it into **API Docs and OpenAPI Discovery**, review the Pricing tab and set a spending limit before running:

```json
{
  "startUrls": [{ "url": "https://docs.apify.com/api/v2" }],
  "maxPagesPerSite": 3,
  "concurrency": 1,
  "requestTimeoutSecs": 10,
  "includeEvidence": true
}
```

The URL is a public source, not a promised result or customer example. For your own check, supply the relevant documentation, policy or legal page directly. A focused URL gives the bounded check a clearer starting point than an unrelated homepage. Resources hosted on another domain may fall outside the submitted site's allowed domain.

## Turn a result into a reviewable spreadsheet

Inspect `status`, `sourceUrls`, `errors` and `retrievedAt` first. For the ten website scanners, review `coverage` and the relevant `extracted` records or `findings`. Keep source links and retrieval dates beside the fields you export, so another reviewer can see where a claim came from.

A confidence score is a heuristic signal, not a probability of correctness. Privacy-policy snippets still need a legal review, and API-like links need contract and access checks. EU output has its own legal-entity fields; optional VIES results can be unavailable, and an unavailable check does not mean an identifier is invalid.

## Understand coverage and charges

Each check reads static public responses. It does not execute browser JavaScript, log in or issue a compliance verdict. Per-site work is bounded to **20 seconds, 1 MiB downloaded and 4 MiB decoded text**. Redirects and failed requests consume the `maxPagesPerSite` attempt budget. Missing or partial evidence is not proof that the underlying policy, identifier or document is absent.

Every chargeable website attempt costs **$0.002**. The tables include that fee once. For the ten website scanners, report fees require `FOUND` or `PARTIAL` with useful detected signals or extracted evidence; empty or failed probes ordinarily incur only the attempt fee. EU's report fee requires `FOUND` with VAT or registry evidence. Check each Actor's Pricing tab for current rates and platform terms. Review billing or output uncertainty before retrying, because another check can incur another fee.
