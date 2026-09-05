# Shenanigan Website

The static React website for [she.energy](https://www.she.energy), built with Vite and deployed to GitHub Pages.

## Local development

The repository pins Node 20 in `.nvmrc`. Each Git worktree should install its own dependencies rather than sharing `node_modules`.

```sh
nvm use
npm ci
npm run dev
```

Vite prints the local URL when the server is ready. The browser console and developer tools are the fastest way to investigate rendering failures.

## Verification

Run the complete local and CI gate with:

```sh
npm run check
```

This runs Oxlint, the Vitest route tests, a production build, and Playwright smoke tests against the built site at desktop and mobile sizes. The browser tests use a worktree-derived port so parallel checkouts do not normally collide. Install Playwright's Chromium build once on a new machine if it is missing:

```sh
npx playwright install chromium
```

Individual commands are also available:

```sh
npm run lint
npm test
npm run build
npm run test:e2e
```

Failed browser tests retain traces and screenshots under `test-results/` for debugging.

## Deployment

Pull requests run the complete verification gate without deploying. A push to `source` runs the same gate and publishes `dist/` to GitHub Pages after it passes.
