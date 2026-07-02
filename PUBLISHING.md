# Publishing Checklist

This directory is public-safe example material for a standalone GitHub repository.

Publish it after the three Apify Actor pages are visible in the Store:

- `changeable_peddler/oss-supply-chain-risk-report`
- `changeable_peddler/sec-red-flag-monitor`
- `changeable_peddler/startup-funding-signal-report`

## Suggested Public Repo Name

`security-risk-intelligence-apify`

## Steps

1. Confirm the three Apify links resolve while logged out.
2. Create the public GitHub repository.
3. Copy this directory into that repository.
4. Push `main`.
5. Add the public repository URL to each Actor README support/examples section.
6. Re-run public-facing documentation verification.

## GitHub CLI Sketch

```bash
gh repo create security-risk-intelligence-apify --public --source . --remote origin --push
```
