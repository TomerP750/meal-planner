import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";

const PlannerPage = lazy(() => import("../../features/planner/pages/PlannerPage"));
const RecipesPage = lazy(() => import("../../features/recipes/pages/RecipesPage"));
const GroceryListPage = lazy(() => import("../../features/grocery-list/pages/GroceryListPage"));
const SigninPage = lazy(() => import("../../features/auth/pages/SigninPage"));

export function Routing() {
    return (
        <Suspense fallback={<p role="status">Loading page...</p>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<HomePage />} />
                <Route path="/planner" element={<PlannerPage />} />
                <Route path="/recipes" element={<RecipesPage />} />
                <Route path="/grocery-list" element={<GroceryListPage />} />
                <Route path="/auth/sign-in" element={<SigninPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}
