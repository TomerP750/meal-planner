import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

export function MainLayout() {
    return (
        <>
            <Navbar />
            <main id="main-content" className="mx-auto max-w-8xl px-4 py-8 sm:px-8 lg:px-12">
                {/* Shows a fallback while lazy-loaded pages load; the navbar stays visible. */}
                <Suspense fallback={<p role="status">Loading page...</p>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}
