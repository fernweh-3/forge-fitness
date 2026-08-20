---
name: commit-feature
description: Review verified feature changes and create a focused Git commit
agent: agent
argument-hint: Prepare a commit for the current feature
---

You are preparing a Git commit for the Forge Fitness project.

## Preconditions

1. Run `git status --short --branch`.
2. Confirm the current branch is not `main`.
3. Inspect `git diff`.
4. Run `git diff --check`.
5. Check for secrets, `.env` files, credentials, API keys, private keys, and local paths.
6. Run `npm run verify`.
7. Confirm that the changes belong to one coherent feature.

If verification fails, do not commit.

## Before committing

Report:

- Current branch.
- Files that will be committed.
- Diff summary.
- Verification results.
- Proposed Conventional Commit message.

Do not stage or commit until the user explicitly confirms.

## After confirmation

1. Stage only files related to the current feature.
2. Show the staged diff summary.
3. Create the approved commit.
4. Run `git status --short --branch`.
5. Report the commit hash.

Do not:

- Push to a remote.
- Create or merge a pull request.
- Rewrite history.
- Run `git reset`.
- Run `git clean`.
