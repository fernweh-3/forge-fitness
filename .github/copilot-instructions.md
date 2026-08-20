# Project instructions

<!-- 内容不要写得太长，只放几乎每次开发都需要遵守的规则。官方也建议保持 instructions 简洁，重点写 AI 无法仅通过代码推断出来的架构决策、约定和环境信息。 -->
<!-- 这不是产品需求，而是“你希望 Agent 如何工作”。 -->

## Project

This is a gym membership website built with React, TypeScript, and Vite.

## General rules

- Use TypeScript strict mode.
- Prefer functional React components and hooks.
- Do not use `any` unless there is a documented reason.
- Keep components small and focused.
- Reuse existing components before creating new ones.
- Use accessible HTML and semantic elements.
- Every user-facing form must have labels and validation messages.
- Keep business logic outside presentational components where practical.
- Do not introduce a dependency without explaining why it is needed.
- Run linting and tests after meaningful changes.
- Do not modify unrelated files.

## UI

- Use the existing design system and spacing conventions.
- Ensure responsive layouts for mobile, tablet, and desktop.
- Use accessible color contrast.
- Use loading, empty, and error states for data-driven views.

## Workflow

- Before editing, inspect the relevant files and summarize the implementation plan.
- Implement one coherent feature at a time.
- After editing, report changed files, tests run, and any remaining risks.

## Verification

After any meaningful code change:

1. Run `npm run verify`.
2. If verification fails, inspect the actual error.
3. Fix only issues related to the current task.
4. Run `npm run verify` again.
5. Never claim success unless the command completed successfully.

## Autonomous workflow

- Read docs/implementation-plan.md before starting.
- Select the next unchecked task only when the user asks to continue.
- Do not mark a task complete until npm run verify succeeds.
- After editing, always run npm run verify.
- If verification fails, fix the current task before continuing.
- Stop and ask before installing dependencies, deleting files, changing requirements, or touching infrastructure.
- Never commit or push changes automatically.

## Git workflow

- Never work directly on main unless explicitly instructed.
- Before changing code, check git status and current branch.
- Keep each feature in a dedicated branch.
- After a meaningful coherent change, run npm run verify.
- Create a commit only when the user explicitly asks for a commit.
- Never run git push without explicit user approval.
- Never merge a pull request automatically.
- Never rewrite history.
- Never run git reset, git clean, or force push.
- Before committing, inspect git diff and check for secrets.
- Use conventional commit messages.
- After a feature is fully implemented and npm run verify passes:
  - show the final diff summary;
  - propose a commit message;
  - ask for confirmation before running git commit.
