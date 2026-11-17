import { Outlet } from "react-router-dom";

export function AuthLayout() {
    return (
        <div className="relative isolate min-h-dvh overflow-hidden bg-background text-foreground [--color-input:transparent]">
            {/* Decorative background: a faded dot grid and crisp leaf shapes in the primary color. */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] bg-size-[22px_22px] opacity-20 mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

                {/* Top-right leaves */}
                <div className="absolute -top-20 -right-20 size-56 rotate-12 rounded-tl-full rounded-br-full bg-primary/10 sm:size-80" />
                <div className="absolute top-16 right-28 hidden size-24 -rotate-12 rounded-tl-full rounded-br-full border-2 border-primary/25 sm:block" />

                {/* Bottom-left leaves */}
                <div className="absolute -bottom-24 -left-20 size-64 -rotate-12 rounded-tl-full rounded-br-full bg-primary/10 sm:size-96" />
                <div className="absolute bottom-20 left-32 hidden size-20 rotate-45 rounded-tl-full rounded-br-full bg-primary/15 sm:block" />
            </div>

            {/* Each auth page sets its own width and places its own logo. */}
            <main id="main-content" className="flex min-h-dvh items-center justify-center px-4 py-12 sm:px-8">
                <Outlet />
            </main>
        </div>
    );
}
