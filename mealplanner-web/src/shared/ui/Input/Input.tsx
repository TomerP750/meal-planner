import { useId } from "react";
import type { ComponentPropsWithRef, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type InputProps = ComponentPropsWithRef<"input"> & {
    label: string;
    icon?: LucideIcon;
    /** Which side of the text the icon sits on. Ignored without `icon`. */
    iconPosition?: "left" | "right";
    error?: string;
    /** Interactive element (e.g. a toggle button) on the right edge. Pair it with a left icon. */
    action?: ReactNode;
};

export function Input({
    label,
    icon: Icon,
    iconPosition = "left",
    error,
    action,
    id,
    className = "",
    ...props
}: InputProps) {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;

    const leftPaddingClassName = Icon && iconPosition === "left" ? "pl-10" : "";
    const rightPaddingClassName = action ? "pr-12" : Icon && iconPosition === "right" ? "pr-10" : "";
    const stateClassName = error
        ? "border-danger focus:outline-danger"
        : "border-input-border focus:border-ring focus:outline-ring";

    return (
        <div className={`flex w-full flex-col gap-1.5 ${className}`}>
            <label htmlFor={inputId} className="text-sm font-medium text-foreground">
                {label}
            </label>

            <div className="relative">
                {Icon && (
                    <Icon
                        aria-hidden="true"
                        size={18}
                        strokeWidth={1.5}
                        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-muted-foreground ${iconPosition === "left" ? "left-3" : "right-3"}`}
                    />
                )}

                <input
                    id={inputId}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? errorId : undefined}
                    className={`min-h-11 w-full rounded-xl border bg-input px-3 text-base text-foreground transition-colors duration-150 placeholder:text-muted-foreground focus:outline-2 focus:outline-offset-1 disabled:cursor-not-allowed disabled:border-transparent disabled:bg-disabled disabled:text-disabled-foreground motion-reduce:transition-none ${stateClassName} ${leftPaddingClassName} ${rightPaddingClassName}`}
                    {...props}
                />

                {action && (
                    <div className="absolute top-1/2 right-1 flex -translate-y-1/2 items-center">{action}</div>
                )}
            </div>

            {error && (
                <p id={errorId} className="text-sm text-danger">
                    {error}
                </p>
            )}
        </div>
    );
}
