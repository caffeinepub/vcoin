# Specification

## Summary
**Goal:** Fix the deployed preview showing a blank screen so the Public Home page renders visible content at `/` across desktop and mobile, with safe base-path handling and a visible startup/error fallback.

**Planned changes:**
- Investigate and fix the root cause of the blank/black screen in the deployed preview so the Public Home route renders at `/`.
- Make routing and asset URLs base-path safe for non-root subpath deployments (e.g., preview URLs), including HTML entry references and router initialization as needed.
- Ensure static generated assets referenced via `assetUrl(...)` load correctly in deployed preview.
- Add a guaranteed full-page English startup status UI (loading) and an English error fallback screen with a “Reload” action so the app never appears blank and does not expose sensitive details.

**User-visible outcome:** Opening the deployed preview at `/` shows the Public Home page (header/hero, etc.) instead of a blank screen on both mobile and desktop, and users see a clear loading or error screen (with Reload) rather than a blank page if startup fails.
