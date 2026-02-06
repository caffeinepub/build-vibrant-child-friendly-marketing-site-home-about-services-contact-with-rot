# Specification

## Summary
**Goal:** Replace the “Why Choose Us” multi-card layouts with a single paragraph-style content box and display the user-provided “WHY CHOOSE US” copy verbatim (including headings and bullet lists).

**Planned changes:**
- Update `frontend/src/content/dreamonomyCopy.ts` to replace the existing placeholder “Why Choose Us” content with the provided “WHY CHOOSE US” text, stored in a structured format that preserves headings and bullet lists verbatim.
- Update `frontend/src/pages/HomePage.tsx` to remove the 3-card “Why Choose Us” grid and render one large content box styled like the existing “Message from the Founder” container, displaying the structured copy (headings + paragraphs + bullets) with no truncation on any breakpoint.
- Update `frontend/src/pages/AboutWhyPage.tsx` to remove the grid-of-reasons “Why Choose Us” layout and render the same single “Message from the Founder”-style content box with the same structured copy, ensuring readable spacing and no truncation on any breakpoint.

**User-visible outcome:** Visitors see a single “Why Choose Us” box (instead of multiple cards) on both the Home and About/Why pages, showing the full provided text with headings and bullet points clearly rendered on all devices.
