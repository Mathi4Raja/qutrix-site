# Palette's Journal - Critical Learnings

## 2025-02-15 - Inline Event Handlers Overwritten
**Learning:** Found a critical bug where `document.querySelectorAll(...).forEach(form => form.onsubmit = ...)` overwrote inline `onsubmit` attributes defined in HTML. This silently disabled custom validation and submission logic (like showing Toasts) and caused unexpected page reloads because the overwriting handler returned `true` (or fell through).
**Action:** When working with legacy or mixed-paradigm codebases (inline events + script blocks), always check for global event listener assignments that might clobber inline handlers. Prefer `addEventListener` over assigning to `onsubmit` properties to avoid conflicts.
