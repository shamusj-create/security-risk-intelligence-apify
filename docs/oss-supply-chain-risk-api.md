# OSS Supply Chain Risk API With Apify

This tutorial shows how to use OSS Supply Chain Risk Report as an Apify API for dependency and container review.

Use it when you need to check:

- pinned PyPI packages
- `requirements.txt`
- npm `package-lock.json`
- Dockerfile `FROM` images
- SBOM package URLs
- Docker Hub image metadata
- OSV vulnerability signals

## Example Input

```json
{
  "pypiPackageVersions": ["requests==2.31.0"],
  "requirementsText": "flask==2.2.2\nurllib3==1.26.18",
  "dockerfileText": "FROM redis:7.2",
  "packageLockJson": {
    "dependencies": {
      "lodash": {
        "version": "4.17.20"
      }
    }
  },
  "includeNvdKeywordSearch": false,
  "concurrency": 1
}
```

## CLI

```bash
apify call changeable_peddler/oss-supply-chain-risk-report --input-file examples/oss-risk-input.json --output-dataset
```

## What To Review

- `score`: risk score for the component.
- `confidence`: confidence in the package or image resolution.
- `metrics.currentVersionAffected`: whether the pinned version is affected by OSV data.
- `metrics.upgradeAvailable`: whether a newer package version exists.
- `disambiguation`: package/image source, requested version, analyzed version, and latest version.
- `highlights`: vulnerability, package, or registry evidence.

See a compact example row in [sample outputs and case studies](sample-outputs-and-case-studies.md#oss-supply-chain-risk-report).

## Buyer Workflows

- vendor security questionnaire review
- dependency audit before onboarding a SaaS vendor
- Docker image triage before deployment review
- SBOM triage for procurement or software due diligence
- repeatable dependency risk datasets for internal dashboards
