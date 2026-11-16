---
paths:
  - "mealplanner-web/**/*"
---

# Frontend rules

## Theme and styling

- Prefer the theme colors defined in `mealplanner-web/src/index.css`. If a needed theme color is missing, use the closest matching color and shade from Tailwind's built-in palette. Avoid hardcoded color values and use the selected fallback consistently.
- Use a linear gradient made from theme colors for primary action buttons. Keep secondary and destructive actions visually distinct, and provide clear hover, focus, active, and disabled states.
- Design every screen and component for responsive layouts and dark mode from the start. Use mobile-first styles, flexible layouts, and appropriate breakpoints; avoid fixed dimensions that cause overflow.
- Prefer semantic theme tokens for surfaces, text, borders, and interactive states, with the closest matching Tailwind palette colors as fallbacks when tokens are missing. Keep both light and dark modes readable and maintain sufficient contrast, including on gradient buttons.
- Follow established spacing, typography, border-radius, and interaction patterns. Extend existing patterns before introducing new ones.

## Components and React

- Reuse existing components whenever practical. Extract shared UI when it represents a coherent pattern or repeated behavior; avoid unnecessary abstractions for one-off markup.
- Keep components focused, use composition, and define clear TypeScript props. Avoid `any` unless there is a documented reason.
- Follow React best practices and the Rules of Hooks. Keep rendering pure, update state immutably, and use stable keys for lists.
- Extract reusable stateful logic into custom hooks when it is shared or meaningfully simplifies a component.
- Derive values during render when possible instead of duplicating state. Use effects to synchronize with external systems, with complete dependencies and appropriate cleanup.
- Use `useMemo`, `useCallback`, and `React.memo` when there is a concrete performance benefit or a required stable reference. Do not add memoization routinely; keep correctness independent of it.
- Use the project's existing libraries and conventions: TanStack Query for server state, React Hook Form for forms, and the shared API client when available. Avoid duplicating fetching, caching, or form infrastructure.

## Accessibility and user experience

- Prefer semantic HTML and native controls. Ensure keyboard navigation, visible focus indicators, accessible names, and associated form labels.
- Support reduced-motion preferences for animations and avoid communicating meaning through color alone.
- Handle loading, empty, error, success, and disabled states where applicable. Give actionable feedback and prevent accidental duplicate submissions.
- Validate form input and display clear field-level errors. Preserve user input when a request fails.
- Keep business logic separate from presentation when practical. Reuse shared types and domain rules instead of duplicating them in components.
- Verify affected interactions, responsive behavior, and light/dark styling with the available non-build checks. Follow the repository-wide restrictions in `CLAUDE.md`.
