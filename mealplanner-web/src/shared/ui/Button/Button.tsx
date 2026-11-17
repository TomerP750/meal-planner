import type { ComponentPropsWithRef } from "react";
import { Loader2Icon } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "sm" | "md";

type ButtonProps = ComponentPropsWithRef<"button"> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    /** Shows a spinner and disables the button to prevent duplicate submissions. */
    isLoading?: boolean;
};

const variantClassName: Record<ButtonVariant, string> = {
    primary:
        "border-transparent bg-linear-to-r from-primary to-primary-strong text-primary-foreground shadow-card hover:brightness-110",
    secondary: "border-divider bg-surface text-foreground hover:bg-accent hover:text-primary-strong",
    danger: "border-transparent bg-danger text-danger-foreground hover:brightness-110",
};

const sizeClassName: Record<ButtonSize, string> = {
    sm: "min-h-9 px-3 text-sm",
    md: "min-h-11 px-5 text-base",
};

export function Button({
    variant = "primary",
    size = "md",
    isLoading = false,
    disabled,
    type = "button",
    className = "",
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled || isLoading}
            aria-busy={isLoading || undefined}
            className={`inline-flex items-center justify-center gap-2 rounded-xl border font-medium tracking-wide transition duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-[0.98] disabled:cursor-not-allowed disabled:border-transparent disabled:bg-disabled disabled:bg-none disabled:text-disabled-foreground disabled:shadow-none disabled:brightness-100 disabled:active:scale-100 motion-reduce:transition-none motion-reduce:active:scale-100 ${variantClassName[variant]} ${sizeClassName[size]} ${className}`}
            {...props}
        >
            {isLoading && <Loader2Icon aria-hidden="true" className="shrink-0 animate-spin motion-reduce:animate-none" size={18} />}
            {children}
        </button>
    );
}
