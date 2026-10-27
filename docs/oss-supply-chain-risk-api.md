# Review pinned dependencies with an OSS supply-chain risk API

Use [OSS Supply Chain Risk Report](https://apify.com/changeable_peddler/oss-supply-chain-risk-report) to turn a supplied package version into a source-linked triage row. It combines available registry metadata with OSV vulnerability records and, optionally, NVD keyword matches. It accepts PyPI versions, npm lockfiles and supported SBOM package URLs; Dockerfile inputs lead to Docker Hub metadata checks, not scans of image layers.

## Start with one component

Open the Actor in Apify Console and paste the [single-package example](../examples/oss-single-package-input.json):

```json
{
  "pypiPackageVersions": ["requests==2.31.0"],
  "includeNvdKeywordSearch": false,
  "concurrency": 1
}
```

Replace that historical package version with the dependency you need to review. Keeping optional NVD keyword search off makes the first check narrower and avoids treating a product-name match as a confirmed affected version.

Inspect the Pricing tab and set a spending limit before execution. **The unit is one component report, not one uploaded file.** A lockfile or SBOM can produce many separately billed reports, up to the Actor's 100-component bound. The original [mixed-input example](../examples/oss-risk-input.json) requests several components; it is not a one-report trial.

## Decide which evidence needs attention

Start with `disambiguation`: confirm the ecosystem, package name and requested versus analyzed version. Then read `metrics.currentVersionAffected`, `upgradeAvailable` and the supporting vulnerability entries in `highlights`. A newer release does not by itself establish a safe or compatible upgrade.

The score is a triage heuristic, not a security certification or probability of exploitation. NVD keyword matches need manual relevance checks, and absent findings do not prove that a component is safe. Docker metadata is not an operating-system package inventory or full container vulnerability scan.

Each attempted component report is billed, including an `API_ERROR` row. Check the existing output and `RUN_SUMMARY` before repeating a failed lookup; a source-error row is not a valid dependency assessment. Delivery and billing are separate operations, so an uncertainty warning should be checked against the dataset and charge history before retrying.

The [worked output](sample-outputs-and-case-studies.md#oss-supply-chain-risk-report) explains the fields. The linked historical artifact is a recorded controlled owner test, not current vulnerability evidence or a customer outcome. Export the source records and retrieval date into your review queue, then investigate the relevant advisories before acting.
