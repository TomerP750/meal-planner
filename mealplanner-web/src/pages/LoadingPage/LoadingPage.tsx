import { LeafIcon } from "lucide-react";

export function LoadingPage() {
    return (
        <div
            role="status"
            aria-live="polite"
            className="flex min-h-dvh w-full flex-col items-center justify-center gap-4 bg-background px-4 text-center"
        >
            <LeafIcon
                aria-hidden="true"
                className="size-16 animate-pulse text-primary motion-reduce:animate-none sm:size-20"
                strokeWidth={1.5}
            />
            <p className="text-lg tracking-wide text-muted-foreground">Loading...</p>
        </div>
    );
}
