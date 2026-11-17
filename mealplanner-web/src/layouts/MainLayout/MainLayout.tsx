import { Routing } from "../../app/router/Routing";
import { Navbar } from "../components/Navbar/Navbar";

export function MainLayout() {
    return (
        <>
            <Navbar />
            <main id="main-content" className="mx-auto max-w-8xl px-4 py-8 sm:px-8 lg:px-12">
                <Routing />
            </main>
        </>
    )
}
