# Meal Planner — Product Requirements Document

Status: Draft for a personal/academic project  
Date: November 16, 2026

## 1. Purpose

Build a meal planner that generates a seven-day meal plan from a user's daily calorie and macronutrient goals and weekly food budget. Users can enter their goals manually or calculate estimated calorie needs from body measurements and activity information. A saved profile pre-fills measurements on future visits.

This is a project demonstration. Nutrition targets, food prices, and calorie calculations are estimates; the product does not provide medical advice or clinical nutrition planning.

## 2. Problem and intended outcome

Planning a week of meals requires balancing nutrition, cost, and food choices. The application should turn a small set of inputs into a practical weekly plan and make the estimated nutrition and cost easy to understand.

The core outcome is a saved weekly plan that meets the user's selected constraints where feasible, with clear explanations when the available recipes cannot satisfy them.

## 3. Target user

An individual adult who wants to plan meals for themselves, has a weekly food budget, and either knows their nutrition targets or wants an estimate. The MVP supports one person per plan. Medical diets, children, and pregnancy-specific planning are outside scope.

## 4. MVP scope

- A user account and editable profile with saved body measurements.
- Manual entry of daily calories, protein, carbohydrates, and fat targets.
- An estimated-calorie flow using profile information, with review before use.
- A weekly budget and a single configured currency.
- Seven days of meals generated from a curated recipe catalog.
- Meal details, daily nutrition totals, and estimated weekly cost.
- Saving and reopening a generated plan.
- Validation and a clear response when the requested plan is infeasible.

Proposed MVP defaults: three meals per day, metric measurements, a fixed sample recipe catalog, and illustrative ingredient prices. These are scope decisions for the project, not capabilities already implemented.

## 5. Main user journeys

### A. Enter goals manually

1. The user signs in and opens the planner.
2. They select "Enter my goals."
3. They enter daily calories (kcal), protein (g), carbohydrates (g), and fat (g).
4. They enter a weekly budget and review the currency.
5. They generate a plan and see seven days of meals, portions, nutrition totals, and estimated cost.
6. They save the plan and can reopen it later.

Body measurements are not required to use manual targets.

### B. Estimate calorie needs

1. The user selects "Estimate my calories."
2. Saved profile measurements pre-fill the form; missing fields are requested.
3. The user reviews height, weight, age, activity level, and any other inputs required by the selected estimation method.
4. The application shows estimated daily calories and explains the method and assumptions in plain language.
5. It proposes daily macro targets using a documented default split. The user can edit both calories and macros before continuing.
6. The user enters a weekly budget and generates, reviews, and saves a plan.

The exact calorie formula, required inputs, activity factors, and default macro split must be selected and documented before implementing this flow. The product must not silently invent missing measurements or present an estimate as an exact requirement.

### C. Return with a saved profile

1. The user signs in again.
2. Their saved measurements pre-fill the estimation form and remain editable.
3. They confirm or update measurements and choose new targets and a budget.
4. A new plan uses those confirmed inputs. Existing plans retain the inputs used when they were generated.

## 6. Functional requirements

### FR-1: Account and profile

- Support account creation, sign-in, and sign-out.
- Store the user's display name and optional body measurements: height in cm and weight in kg.
- Store age and activity information when needed for estimation; collect additional formula-specific information only if required by the chosen method.
- Allow profile fields to be viewed and edited, with units and validation shown beside inputs.
- Persist profile changes across sessions and isolate each user's profile and plans.
- Do not overwrite saved profile data merely because the user edits a planning form; saving profile updates must be explicit.

### FR-2: Nutrition goals

- Offer a clear choice between manual targets and calorie estimation.
- Treat calories and macro targets as daily values.
- Require positive numeric values for calories and each macro in the manual flow; reject missing, nonnumeric, or negative values.
- Show a warning when calorie and macro inputs are inconsistent, using the approximate relationship `kcal = 4 × protein grams + 4 × carbohydrate grams + 9 × fat grams`.
- Proposed consistency threshold: a difference greater than 10% of the calorie target requires the user to revise the inputs before generation.
- Never silently change user-entered goals. Show the final targets for review before generation.

### FR-3: Calorie estimation

- Use one documented estimation method consistently on the server.
- Require every input needed by that method and validate supported ranges before calculation.
- Show the calculated calorie estimate, suggested macro targets, and an explanation of the assumptions.
- Allow the user to edit the proposed targets and pass the same validation as manually entered targets.
- Pre-fill available profile measurements and identify missing fields clearly.
- Include a short notice that the result is an estimate for general meal planning.

### FR-4: Weekly budget

- Require a positive weekly food budget for one person and display its currency.
- Use one configured currency throughout the MVP; do not perform currency conversion.
- Define plan cost as the estimated ingredient quantities consumed across all planned servings, calculated from catalog unit prices.
- Label this as an ingredient-use estimate. Store package sizes, delivery charges, and actual checkout totals are outside MVP cost calculations.
- Keep full precision during calculation and round only display values. The underlying total must remain within budget.
- If the budget cannot support a valid plan, explain the conflict and let the user adjust it. Never raise the budget automatically.

### FR-5: Recipe catalog and generation

- Use a curated catalog with recipe name, ingredients, quantities, serving yield, preparation instructions, nutrition per serving, and estimated ingredient prices.
- Each generated plan contains exactly seven days with breakfast, lunch, and dinner each day.
- Each meal shows its recipe, serving quantity, calories, protein, carbohydrates, fat, and estimated cost.
- Sum all meal values into daily totals and a weekly cost total.
- Proposed nutrition tolerance: each day's calories and each macro must be within ±10% of the corresponding daily target for the plan to be marked as meeting goals.
- Keep portions practical: use whole or half servings, with a proposed range of 0.5–2 servings per meal.
- Recipes may repeat to make budget and nutrition constraints feasible. Variety is a secondary preference.
- Treat the budget cap as a hard constraint. Do not label an over-budget or out-of-tolerance plan as successful.
- If no valid plan can be found, show an actionable explanation. Do not claim the constraints are mathematically impossible merely because a search attempt failed.
- Use only catalog nutrition and prices; missing required recipe data makes a recipe ineligible for generation.
- Generation must use a bounded search and return a clear failure state rather than run indefinitely.

### FR-6: Plan review and persistence

- Display the weekly plan in an understandable day-by-day layout.
- Show target versus actual nutrition for each day and budget versus estimated weekly cost.
- Allow the user to save a generated plan and reopen saved plans.
- Store the selected targets, budget, currency, measurement snapshot if used, and estimation method version with the plan.
- Store a snapshot of meal portions, nutrition, and prices so later catalog changes do not alter previously saved totals.
- Allow full-plan regeneration using the reviewed inputs. A previously saved plan remains available until the user explicitly replaces or deletes it.

## 7. Main screens

| Screen | Purpose |
| --- | --- |
| Sign-in / registration | Access the user's profile and saved plans. |
| Profile | View and update body measurements and estimation inputs. |
| Plan setup | Choose manual or estimated targets, review daily goals, and enter a weekly budget. |
| Weekly plan | Review seven days of meals, daily nutrition, cost, and save or regenerate. |
| Meal details | Read ingredient quantities, portions, nutrition, and preparation instructions. |
| Saved plans | Reopen previously saved weekly plans. |

Forms must preserve entered values after validation or generation errors and show loading, empty, success, and failure states.

## 8. Proposed data model

| Entity | Key data |
| --- | --- |
| User | ID, account identity, authentication metadata. |
| Profile | User ID, display name, height, weight, age, activity level, formula-specific inputs, updated time. |
| Ingredient | ID, name, quantity unit, nutrition basis, unit price, currency, price source/date. |
| Recipe | ID, name, ingredients and quantities, serving yield, instructions, nutrition per serving. |
| MealPlan | ID, owner ID, created time, input mode, daily targets, weekly budget, currency, input snapshot, method version, total cost. |
| PlannedMeal | Plan ID, day index, meal slot, recipe reference, servings, ingredient/nutrition/price snapshot. |

Recipe totals must use a consistent quantity basis and avoid double-counting ingredient costs. For the project, recipes and illustrative prices can be maintained as seed data; a catalog administration interface is not required.

## 9. Quality requirements

- Validate inputs on the server as well as in the interface.
- Enforce ownership checks for every profile and saved-plan operation.
- Use established authentication mechanisms and never store plaintext passwords.
- Keep profile measurements and authentication secrets out of application logs.
- Make forms usable with a keyboard, associate labels with inputs, and communicate errors without relying only on color.
- Support desktop and mobile layouts.
- Proposed performance goal: generate a plan within 10 seconds for the seeded demo catalog on a documented local test setup.
- The core demo must work with local recipe and price data without requiring a paid external service.

## 10. Acceptance criteria

1. **Manual flow:** Given valid calorie/macro targets and a feasible weekly budget, generation produces 21 meal slots across seven days, with portions and daily totals.
2. **Nutrition accuracy:** Recalculating nutrition from saved meal servings agrees with displayed totals to display rounding, and every day marked successful meets the documented tolerance.
3. **Budget:** A successful plan's unrounded estimated weekly ingredient cost does not exceed the entered budget.
4. **Estimation:** Given complete valid measurements, the documented method returns a reproducible estimate and editable macro suggestions before generation.
5. **Profile reuse:** Saved measurements pre-fill the estimation form after signing out and signing back in.
6. **Manual independence:** A user without saved measurements can generate a plan with manually entered goals.
7. **Persistence:** Reopening a saved plan preserves meals, portions, targets, and costs even if profile measurements or catalog prices change.
8. **Invalid inputs:** Missing values, invalid numbers, and inconsistent targets produce specific errors without clearing the form.
9. **Unmet constraints:** A failed search or insufficient catalog coverage produces an explanation and editable inputs, without presenting a noncompliant plan as valid.
10. **User isolation:** One user cannot read or change another user's profile or saved plans.

## 11. Out of scope for the MVP

- Production deployment, public launch, or commercial operation.
- Medical nutrition recommendations or guaranteed weight outcomes.
- Live grocery prices, store integrations, purchases, and delivery.
- Household meal planning, multiple currencies, or automatic currency conversion.
- Allergy-safe or therapeutic diet guarantees.
- AI-generated recipes, barcode scanning, wearable integrations, and food logging.
- Individual meal swapping, shopping-list export, and advanced variety preferences; these can be considered after the core flow works.

## 12. Implementation sequence

1. Confirm the estimation method, target tolerances, currency, price basis, and sample catalog coverage.
2. Implement account access and persistent profiles.
3. Implement manual target input, estimation, budget input, and validation.
4. Implement catalog-based generation and constraint checks.
5. Implement plan review, saving, and reopening.
6. Verify the acceptance criteria using existing permitted tooling.

