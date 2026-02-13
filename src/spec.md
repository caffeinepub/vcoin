# Specification

## Summary
**Goal:** Fix the deployed mobile preview rendering as a blank/black screen so public pages reliably render and failures show a visible UI instead of a silent blank state.

**Planned changes:**
- Investigate and resolve the mobile deployed-preview blank/black screen so the Public Header and Home hero content render at `/`.
- Harden TanStack Router initialization for deployed environments (including non-root base paths), and add a user-friendly Not Found route for unmatched paths.
- Add app-level error handling so unexpected runtime failures (including Internet Identity initialization issues) render a visible English error UI with a recovery action (e.g., reload) instead of a blank screen.
- Ensure public routes (`/`, `/whitepaper`, `/smart-contract`, `/roadmap`) and direct navigation/refresh to `/`, `/login`, `/register`, `/user`, `/admin` do not enter an infinite loading/blank state; show loading UI while resolving and surface errors if it fails.

**User-visible outcome:** Opening the deployed preview on mobile shows the normal Home page (header + hero) and other routes load reliably; unknown paths show a Not Found screen; if initialization fails, users see a clear English error message with a reload option rather than a blank/black screen.
