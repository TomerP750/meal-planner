---
paths:
  - "mealplanner-api/**/*"
---

# Backend rules

## Layers and structure

- Keep responsibilities separate: controllers handle HTTP requests and responses, services implement business logic, and repositories handle persistence and database queries.
- Keep controllers thin. Controllers call services; services call repositories when persistence is needed. Do not query the database directly from controllers or put business rules in repositories.
- Organize code by feature using NestJS modules and dependency injection. Keep HTTP-specific concerns out of reusable business logic.
- Add repositories where persistence is needed; do not introduce empty layers or abstractions without a concrete purpose.

## Functions and reuse

- Reuse existing helpers before writing duplicate logic. Extract shared logic into clearly named helpers with explicit inputs and return types.
- Keep functions focused on one responsibility. Split large functions when they mix responsibilities or become difficult to follow, using small helper functions with meaningful names.
- Keep feature-specific helpers near their feature. Move helpers into shared code only when multiple features need them.
- Prefer pure helpers for calculations and transformations. Keep database calls and other side effects explicit.
- Use TypeScript types for inputs, outputs, and domain models. Avoid `any` unless there is a documented reason.

## Validation, access, and errors

- Always validate incoming request bodies, query parameters, and route parameters with Zod schemas at the API boundary before passing them to services. Validate numeric ranges, units, and allowed values; explicitly define any coercion and unknown-field handling. Infer TypeScript input types from the schemas to keep runtime validation and types aligned.
- If Zod is not installed, request explicit permission before installing it and leave dependent implementation pending until permission is granted. Follow the installation restrictions in `CLAUDE.md`.
- Enforce business constraints in services, including nutrition target consistency and budget limits. Do not rely on frontend validation.
- Authenticate protected endpoints and enforce ownership checks for every profile and saved-plan operation. Derive the acting user from trusted authentication context rather than accepting a client-supplied owner ID.
- Return consistent errors with appropriate HTTP status codes. Do not expose stack traces, database internals, credentials, or sensitive profile data in responses or logs.
- Handle asynchronous failures explicitly. Do not swallow errors or return a successful response when an operation fails.

## Persistence and meal-planning logic

- Use parameterized queries or the existing database client's safe query API. Use transactions for related writes that must succeed or fail together.
- Keep nutrition units, currency, and price bases consistent. Preserve calculation precision and round only for display; verify the unrounded cost against the budget.
- Keep generation bounded and distinguish a failed search from proof that a plan is impossible. Never silently relax nutrition targets or increase the user's budget.
- Save the input, nutrition, portion, and price snapshots needed to keep saved plans stable when profiles or catalog data change.
- Read configuration through the project's configuration approach. Never hardcode secrets or commit credentials.

## Execution and verification

- Follow the build, deployment, publishing, and installation restrictions in `CLAUDE.md`. They already cover backend work; modifying a file does not authorize any of those actions.
- Use existing permitted checks appropriate to the change. Focus tests on business rules, authorization boundaries, calculations, and failure cases rather than mirroring implementation details.
- Inspect check scripts before running them. The current backend lint script includes `--fix` and modifies files; treat it as a modifying action rather than a read-only check.
- Report which checks ran and which were skipped.
