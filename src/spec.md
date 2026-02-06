# Specification

## Summary
**Goal:** Restore the last known working DREAMONOMY marketing site frontend so it renders correctly again after a broken deployment.

**Planned changes:**
- Roll back/revert the frontend to the last working version/state where the Home, About/Why, Services, and Contact pages render with the existing navbar/footer and layouts intact.
- Identify and undo the specific recent change(s) that caused the site to go blank/break (e.g., routing/rendering/import issues or styling that hides the root), ensuring the app mounts and hash navigation works.
- Confirm the frontend builds successfully and loads without runtime errors that prevent rendering.

**User-visible outcome:** The deployed site loads without a blank screen and users can navigate between Home, About/Why, Services, and Contact via the existing navigation, with content rendering on desktop and mobile.
