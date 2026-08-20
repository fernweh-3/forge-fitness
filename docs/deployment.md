# Deployment

## Platform

Cloudflare Pages with Git integration.

## Production branch

main

## Build configuration

- Framework preset: Vite
- Build command: npm run build
- Output directory: dist
- Node.js version: 22

## Deployment flow

1. Open a pull request.
2. GitHub Actions runs CI.
3. Review the Cloudflare preview deployment.
4. Merge the pull request into main.
5. Cloudflare Pages deploys main to production.

## Local verification

```bash
npm ci
npm run verify
npm run build
```

## Environment variables

This project currently does not require production environment variables.

## Future changes

If deployment moves to Wrangler or Docker, update this document and add the required secrets through GitHub repository settings.
