import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";
import { AuthLayout } from "../../features/auth/pages/AuthLayout";

const PlannerPage = lazy(() => import("../../features/planner/pages/PlannerPage"));
const RecipesPage = lazy(() => import("../../features/recipes/pages/RecipesPage"));
const GroceryListPage = lazy(() => import("../../features/grocery-list/pages/GroceryListPage"));
const SigninPage = lazy(() => import("../../features/auth/pages/SigninPage"));
const SignUpPage = lazy(() => import("../../features/auth/pages/SignUpPage"));

// Loading fallbacks live in each layout (MainLayout, AuthLayout) so the surrounding UI stays visible.
export function Routing() {
    return (
        <Routes>
            {/* Routes with the navbar */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<HomePage />} />
                <Route path="/planner" element={<PlannerPage />} />
                <Route path="/recipes" element={<RecipesPage />} />
                <Route path="/grocery-list" element={<GroceryListPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>

            {/* Routes without the navbar */}
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="sign-in" element={<SigninPage />} />
                <Route path="sign-up" element={<SignUpPage />} />
            </Route>
        </Routes>
    );
}
