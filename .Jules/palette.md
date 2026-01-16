# Palette's Journal

## 2024-05-22 - Modal Accessibility Patterns
**Learning:** Even if individual modals have close buttons, users expect the `Escape` key to close any open modal. This is a critical accessibility pattern often missed in custom implementations.
**Action:** When implementing custom modals, always attach a global `keydown` listener that checks for `Escape` and closes the currently open modal (or all modals).
