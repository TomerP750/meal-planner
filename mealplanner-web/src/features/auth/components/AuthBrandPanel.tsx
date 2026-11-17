import type { ReactNode } from "react";
import { CalendarCheckIcon, SaladIcon, ShoppingBasketIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AuthLogo } from "./AuthLogo";
import { AuthHeading } from "./AuthHeading";

type Highlight = {
    icon: LucideIcon;
    title: string;
    description: string;
};

const highlights: Highlight[] = [
    { icon: CalendarCheckIcon, title: "Plan your week", description: "Build balanced meals for every day in minutes." },
    { icon: SaladIcon, title: "Eat fresh and healthy", description: "Keep your favorite wholesome recipes in one place." },
    { icon: ShoppingBasketIcon, title: "Shop with a list", description: "Turn your plan into a grocery list automatically." },
];

type AuthBrandPanelProps = {
    titleId: string;
    title: string;
    description: string;
    /** Content under the highlights, e.g. an AuthSwitchLink. */
    children?: ReactNode;
};

/** Primary gradient panel with the logo, page heading and product highlights (highlights on large screens only). */
export function AuthBrandPanel({ titleId, title, description, children }: AuthBrandPanelProps) {
    return (
        <header className="relative isolate flex flex-col items-center gap-6 overflow-hidden rounded-2xl bg-linear-to-br from-primary to-primary-strong p-6 text-center text-primary-foreground shadow-card sm:p-10 lg:items-start lg:justify-center lg:p-12 lg:text-left">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-24 -right-24 size-72 rounded-full bg-primary-foreground/10" />
                <div className="absolute -bottom-32 -left-24 size-80 rounded-full bg-primary-foreground/5" />
            </div>

            <AuthLogo onPrimary />

            <AuthHeading id={titleId} title={title} description={description} onPrimary />

            <ul className="hidden flex-col gap-5 lg:flex">
                {highlights.map(({ icon: Icon, title: highlightTitle, description: highlightDescription }) => (
                    <li key={highlightTitle} className="flex items-start gap-4">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15">
                            <Icon aria-hidden="true" size={20} strokeWidth={1.75} />
                        </span>
                        <div className="flex flex-col gap-0.5">
                            <p className="font-semibold">{highlightTitle}</p>
                            <p className="text-sm opacity-85">{highlightDescription}</p>
                        </div>
                    </li>
                ))}
            </ul>

            {children}
        </header>
    );
}
