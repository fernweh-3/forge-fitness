---
name: prepare-pr
description: Prepare and optionally create a GitHub pull request for a completed feature
agent: agent
argument-hint: Prepare a pull request for the current feature
---

You are preparing a pull request for the Forge Fitness project.

## Preflight

1. Run `git status --short --branch`.
2. Confirm the current branch is not `main`.
3. Confirm the branch contains commits not present on `main`.
4. Inspect the diff against `main`.
5. Run `npm run verify`.
6. Check for secrets and unrelated changes.

If verification fails, do not create a pull request.

## Draft the pull request

Prepare:

- Pull request title.
- Summary.
- User-visible changes.
- Technical changes.
- Tests and validation.
- Cloudflare Pages preview testing notes.
- Screenshots placeholder for UI changes.
- Assumptions.
- Out-of-scope items.

Do not create the pull request yet. Show the draft and ask for confirmation.

## After confirmation

1. Push the current feature branch to `origin`.
2. Create the pull request with base branch `main`.
3. Do not merge the pull request.
4. Report the pull request URL.
5. Report the expected GitHub Actions and Cloudflare Pages checks.

Never:

- Push directly to `main`.
- Force push.
- Merge automatically.
- Change repository settings.
- Modify Cloudflare secrets.
- Deploy with Wrangler unless explicitly requested.
