import { useEffect, useId, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export type MenuItem = {
    id: string;
    label: string;
    onSelect: () => void;
    icon?: LucideIcon;
    disabled?: boolean;
    variant?: "default" | "danger";
};

type MenuProps = {
    items: MenuItem[];
    trigger: ReactNode;
    /** Accessible name for the trigger; required when `trigger` is icon-only. */
    triggerLabel?: string;
    align?: "start" | "end";
};

const itemVariantClassName = {
    default: "text-foreground hover:bg-accent hover:text-primary-strong [&>svg]:text-primary",
    danger: "text-danger hover:bg-danger-surface",
};

export function Menu({ items, trigger, triggerLabel, align = "end" }: MenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const menuId = useId();

    useEffect(() => {
        if (!isOpen) return;

        const handlePointerDown = (event: PointerEvent) => {
            if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
        };

        document.addEventListener("pointerdown", handlePointerDown);
        return () => document.removeEventListener("pointerdown", handlePointerDown);
    }, [isOpen]);

    return (
        <div ref={rootRef} className="relative inline-block">
            <button
                type="button"
                aria-label={triggerLabel}
                aria-expanded={isOpen}
                aria-controls={menuId}
                onClick={() => setIsOpen((open) => !open)}
                className={`inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-xl px-3 transition-colors duration-150 hover:bg-accent hover:text-primary-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring motion-reduce:transition-none ${isOpen ? "bg-accent text-primary-strong" : "text-foreground"}`}
            >
                {trigger}
            </button>

            {isOpen && (
                <ul
                    id={menuId}
                    className={`absolute top-full z-50 mt-2 flex w-max min-w-48 max-w-[calc(100vw-2rem)] animate-menu-in flex-col gap-1 rounded-xl border border-divider bg-surface p-1.5 text-foreground shadow-card motion-reduce:animate-none ${align === "end" ? "right-0 origin-top-right" : "left-0 origin-top-left"}`}
                >
                    {items.map(({ id, label, icon: Icon, disabled, variant = "default", onSelect }) => (
                        <li key={id}>
                            <button
                                type="button"
                                disabled={disabled}
                                onClick={() => {
                                    setIsOpen(false);
                                    onSelect();
                                }}
                                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-base tracking-wide transition-colors duration-150 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:bg-transparent disabled:text-disabled-foreground disabled:[&>svg]:text-disabled-foreground motion-reduce:transition-none ${itemVariantClassName[variant]}`}
                            >
                                {Icon && <Icon aria-hidden="true" className="shrink-0" size={18} strokeWidth={1.5} />}
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
