---
paths:
  - "mealplanner-web/**/*"
---

# Frontend rules

## Folder structure

- Follow the existing feature-based structure under `mealplanner-web/src/`. Create folders only when needed; avoid speculative scaffolding or unnecessary nesting.
- Use `app/` for application setup: `app/router/` for application routing, `app/store/` for application-wide store setup, and `app/providers/` for composing providers when needed.
- Keep domain-specific code in `features/<feature>/`. Follow the existing `features/auth/` pattern with `api/`, `components/`, `context/`, `hooks/`, and `pages/` as needed. Keep feature-specific types, utilities, and constants within their feature.
- Keep a feature's context and provider implementation together in its `context/` folder, such as `features/auth/context/AuthContext.ts` and `AuthProvider.tsx`. Keep its consumer hook in the feature's `hooks/` folder. Compose application-level providers in `app/providers/` without moving feature-owned implementations there.
- Use top-level `pages/` for general application pages such as `HomePage` and `NotFoundPage`. Keep feature-specific pages, such as login and registration, in `features/auth/pages/`.
- Use `layouts/` for shared page wrappers and `layouts/components/` for layout components such as the navbar, sidebar, footer, and mobile menu. Add a separate auth layout only when auth pages need a shared presentation.
- Use `shared/` for code reused across features: `ui/`, `hooks/`, `utils/`, `types/`, `config/`, and `constants/`. Shared code must not import feature-specific or application-composition code. Keep shared API infrastructure here when needed and feature-specific requests in the feature's `api/` folder.
- Use `src/assets/` for imported assets and `public/` for assets served directly by URL. Keep global theme and base styles in the existing `src/index.css`.
- Colocate component-specific styles and tests with their implementation when needed. Follow existing naming conventions and keep related files together.

## Theme and styling

- Treat `mealplanner-web/src/index.css` as the shared design palette. Light mode is the default; dark mode is activated only by `data-theme="dark"` on `<html>`. Future theme context should set this attribute. Do not add automatic system-theme switching without a product requirement.
- Use semantic utilities such as `bg-background`, `bg-surface`, `text-foreground`, `text-muted-foreground`, `border-divider`, `bg-input`, `border-input-border`, and `outline-ring`. Pair `primary`, `accent`, `danger`, and `disabled` backgrounds with their matching `*-foreground` tokens. Use status tokens with their matching `*-surface` backgrounds for feedback.
- Theme tokens switch automatically with the root attribute; reserve `dark:` for design differences beyond those tokens. Add matching light and dark values when extending the semantic palette. Primary button gradients should use `primary` and `primary-strong` with `primary-foreground` text.
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
- Whenever creating a component, implement a skeleton for its loading state using Tailwind's `animate-pulse` and `motion-reduce:animate-none`. Match the component's expected layout and dimensions to minimize layout shifts, use theme colors, and reuse shared skeleton primitives where available. Show the skeleton while content is loading; mark decorative placeholders as `aria-hidden` and expose the loading state through an accessible status or `aria-busy` on the content container.
- Validate form input and display clear field-level errors. Preserve user input when a request fails.
- Keep business logic separate from presentation when practical. Reuse shared types and domain rules instead of duplicating them in components.
- Verify affected interactions, responsive behavior, and light/dark styling with the available non-build checks. Follow the repository-wide restrictions in `CLAUDE.md`.
