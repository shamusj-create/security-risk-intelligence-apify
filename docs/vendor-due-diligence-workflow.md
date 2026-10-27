# Hand off public-source findings for vendor review

Choose the relevant check from the [vendor research selector](vendor-risk-automation-with-apify.md), then export its dataset into your existing review queue. The three company/software Actors are independent tools; running all three is neither required nor always relevant.

## Make the record traceable

For each finding, preserve the supplied `input`, `status` and `checkedAt`. Add the resolved identity from `disambiguation` and the supporting records from `highlights` or `metrics`. Keep the source URL with any note that a reviewer will need to verify.

Start with identity and source availability. A company-name match can be wrong, a filing can have an amendment, and a package name can refer to a different ecosystem. An `API_ERROR` row is not a clean assessment; check the run before retrying because attempted reports are billed.

## Keep different conclusions separate

A dependency's affected-version evidence is different from a filing-type flag or a startup's public mention count. Use separate columns for those findings rather than summing their heuristic scores into a single vendor-risk number.

Assign a reviewer and a next action based on the actual evidence. That might mean opening an advisory, reading a filing or resolving an ambiguous company match. The [worked examples](sample-outputs-and-case-studies.md) show field shapes, not observed customer outcomes.

Export JSON when you need nested evidence, or select the relevant fields for a spreadsheet. These example guides do not create alerts, contact companies or automate a consequential decision. The independent CQC product uses a different schema; follow its [care-provider export guide](cqc-care-home-report-links-csv.md) instead.
