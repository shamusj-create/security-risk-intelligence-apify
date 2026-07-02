# Vendor Due-Diligence Workflow With Apify

This workflow combines the three Security Risk Intelligence Suite Actors into a repeatable public-data review.

## Step 1: Check Dependencies

Run OSS Supply Chain Risk Report with dependency evidence from a vendor security packet:

- `requirements.txt`
- package-lock JSON
- Dockerfile
- SBOM JSON
- specific PyPI package versions

Review `score`, `confidence`, affected versions, upgrade availability, and component disambiguation.

## Step 2: Check Public Companies

If the vendor or parent company is public, run SEC Red Flag Monitor with its ticker or CIK.

Review restatements, late filings, executive changes, restructuring items, and ownership filing clusters.

## Step 3: Check Startup Signals

If the vendor is private or startup-like, run Startup Funding Signal Report with its domain.

Review Form D evidence, Hacker News mentions, GitHub activity, domain age, and disambiguation metadata.

## Step 4: Export Results

Export each Apify dataset as JSON, CSV, or Excel and combine the rows in:

- a spreadsheet
- a procurement queue
- a GRC tool
- a CRM enrichment workflow
- a custom risk dashboard

## Fields To Standardize

Across all three Actors, normalize these fields first:

- `input`
- `status`
- `score`
- `confidence`
- `summary`
- `recommendations`
- `metrics`
- `disambiguation`
- `checkedAt`
