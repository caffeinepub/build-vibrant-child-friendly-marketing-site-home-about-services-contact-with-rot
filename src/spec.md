# Specification

## Summary
**Goal:** Replace the Services page’s generic/placeholder content with the provided DREAMONOMY “Our Learning Services” content and render it using a nested, section-based structure.

**Planned changes:**
- Update `frontend/src/content/dreamonomyCopy.ts` to remove existing placeholder services hero/category/CTA copy and replace it with only the provided “SERVICES / Our Learning Services” structure (intro + all specified sections and bullet lists).
- Update `frontend/src/pages/ServicesPage.tsx` to render the Services page from the new structured `dreamonomyCopy.services` content, replacing the current 6-card grid and the generic CTA section while keeping the existing styling approach and ensuring readability across screen sizes.

**User-visible outcome:** The Services page shows “Our Learning Services” followed by the full set of provided service sections (with clear headings and bullet lists), with no old service cards or generic CTA content.
