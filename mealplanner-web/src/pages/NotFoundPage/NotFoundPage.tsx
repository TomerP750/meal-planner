import { Link } from "react-router-dom";

export function NotFoundPage() {
    return (
        <section>
            <h1 className="text-3xl font-semibold">Page not found</h1>
            <Link to="/" className="mt-3 inline-block text-primary-strong underline">Return home</Link>
        </section>
    );
}
