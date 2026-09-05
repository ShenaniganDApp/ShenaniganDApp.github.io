# Repository Maintenance Implementation Plan

**Goal:** Replace the obsolete dependency and build chain, remove dead code, reduce shipped bytes, and make local and CI verification repeatable.
**Scope:** The React website on `source`, its npm dependencies, GitHub Actions workflow, dead staking code, static assets, and verification commands.
**Non-goals:** Redesigning the site, rewriting visible copy, changing destination URLs, or deploying/merging the branch.
**Risks:** Legacy routes may depend on dead files, build-tool migration can change asset URLs, and image optimization can affect visual quality.

## Baseline

- A normal Yarn install fails while building the obsolete `bufferutil` dependency because `node-gyp` is unavailable.
- The CRA/Webpack 4 production build fails on Node 20 without the OpenSSL legacy-provider workaround.
- The workaround build is 12,976 KiB and reports about 228 KiB of gzipped JavaScript.
- The only test is the failing Create React App placeholder in `src/App.test.js`.
- The deployed application imports an empty `StakingSection` module whose implementation is entirely commented out.

## Files

- Modify: `package.json`
- Create: `package-lock.json`, `.nvmrc`, `vite.config.js`, `playwright.config.js`, `index.html`
- Delete: `yarn.lock`, `public/index.html`, `.github/workflows/action-discord`
- Modify: `.github/workflows/main.yml`
- Modify: live files under `src/`
- Delete: unused staking, CRA, test-placeholder, and empty modules under `src/`
- Modify: oversized image assets under `src/images/` and `public/`
- Create: focused route smoke tests under `src/`

### Task 1: Modernize dependencies and build tooling

- Risk: medium
- Outcome: A clean install and production build run on the pinned Node version without compatibility flags.
- Steps:
  - Replace CRA and unused Web3/media dependencies with Vite and the dependencies imported by live code.
  - Move the HTML entry point to Vite's root convention and update the React entry point.
  - Replace `yarn.lock` with an npm lockfile generated from the reviewed manifest.
  - Add Oxlint and one `check` command that runs lint, unit tests, a production build, and browser smoke tests.
- Verification:
  - `npm ci`
  - `npm run build`
- Dependencies: none

### Task 2: Remove dead code and repair live behavior

- Risk: medium
- Outcome: Dead staking/entry/service-worker code and unused wrappers are gone, and every retained route renders a valid component.
- Steps:
  - Remove the broken `/staking` route and its commented implementation.
  - Remove modules and package imports used only by the dead staking path.
  - Remove the unused entry section, CRA service-worker boilerplate, empty style module, commented blocks, and unused imports.
  - Correct effect cleanup and mutable timer handling where the audit identifies real runtime issues.
- Verification:
  - `npm run lint`
  - `npm test -- --run`
- Dependencies: Task 1

### Task 3: Reduce shipped assets and JavaScript

- Risk: medium
- Outcome: The production output is materially smaller without changing the site's design intent.
- Steps:
  - Remove dependencies imported only by commented or dead code.
  - Eliminate the duplicate scoreboard source asset and use the public asset consistently.
  - Downscale oversized raster assets to dimensions appropriate for their rendered size while preserving aspect ratio and alpha where needed.
  - Add native lazy-loading and decoding hints to below-the-fold images.
- Verification:
  - `npm run build`
  - Compare `du -sk dist` and generated JavaScript sizes with the recorded baseline.
  - Run browser smoke checks for `/home` and the not-found route at desktop and mobile widths.
- Dependencies: Task 2

### Task 4: Make CI and agent verification deterministic

- Risk: low
- Outcome: Pull requests verify without deployment secrets, while pushes to `source` retain deployment behavior.
- Steps:
  - Pin the supported Node version and use `npm ci` in GitHub Actions.
  - Run the repository `check` command on pull requests.
  - Restrict the GitHub Pages deployment step to pushes to `source`.
  - Remove the inactive extensionless Discord workflow fragment.
- Verification:
  - Inspect the workflow diff and run the same `npm ci` and `npm run check` commands locally.
  - `npm audit --omit=dev`
- Dependencies: Tasks 1-3

### Task 5: Prepare review

- Risk: low
- Outcome: The branch contains reviewable commits and an evidence-backed pull request without merging or deploying it.
- Steps:
  - Review the complete diff for unrelated changes and secrets.
  - Commit logical dependency/tooling, cleanup, and performance changes with conventional messages.
  - Push the feature branch and open a pull request targeting `source`.
- Verification:
  - `git status --short`
  - `git log --oneline origin/source..HEAD`
  - Confirm unresolved review-thread count before any merge-readiness claim.
- Dependencies: Tasks 1-4

## Resource sketch

This is a static site, so the relevant hot path is first-page download and parse work. The baseline production directory is 12,976 KiB and the CRA report lists about 228 KiB of gzipped JavaScript. The performance gate is a measured reduction in both values, with no route-smoke regressions.

## Results

- `npm ci` completes without install warnings.
- `npm audit --omit=dev --audit-level=moderate` reports zero vulnerabilities.
- `npm run check` passes Oxlint, 2 Vitest route tests, the production build, and 4 Playwright desktop/mobile browser tests.
- The production directory is 3,328 KiB, down 74% from the 12,976 KiB baseline.
- The production JavaScript is 88.81 KiB gzipped, down 61% from the roughly 228 KiB baseline.
- Manual desktop and 390-by-844 mobile checks confirmed the page layout, FAQ mouse/keyboard interaction, mobile navigation, and a clean browser console.
