# Specification

## Summary
**Goal:** Fix the frontend blank screen by correcting the TanStack Router root route setup and add a safe, user-friendly error fallback so the app never renders as an empty page on unexpected client errors.

**Planned changes:**
- Update `frontend/src/App.tsx` TanStack Router setup so `RouterProvider` is rendered only once (in `App`) and the root route component renders routed content via an Outlet-style pattern while keeping global wrappers (e.g., `ThemeProvider`, `Toaster`) around it.
- Add an application-level error fallback screen for unexpected runtime failures during initialization/render, showing a simple English message and a “Reload” action without exposing sensitive details.

**User-visible outcome:** The deployed site loads the public home page instead of a blank screen, navigation across public routes (e.g., `/`, `/whitepaper`, `/roadmap`) works normally, and if an unexpected client error occurs, users see a friendly fallback with a reload option.
