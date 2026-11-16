# Project instructions

- NEVER build, deploy, publish, or install anything without the user's explicit permission for that specific action.
- This includes local and production builds, dependency installation or updates, packages, tools, runtimes, browser binaries, containers, and global installations.
- Do not bypass these restrictions with another package manager, direct executable, script, lifecycle hook, container command, or CI workflow.
- Requests to implement, fix, test, or verify do not grant permission for restricted actions. Explain the exact action and why it is needed, then wait for explicit permission.
- Use existing non-build tests or lint checks only after checking that they do not trigger builds, installations, deployments, or publishing. Do not install missing dependencies without permission.
- Report which checks ran and which were skipped. Never claim an unexecuted build or deployment succeeded.
- Follow the product scope in `PRD.md`.
