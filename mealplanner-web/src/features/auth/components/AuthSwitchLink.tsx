import { Link } from "react-router-dom";

type AuthSwitchLinkProps = {
    /** Lead-in text, e.g. "Already have an account?". */
    prompt: string;
    to: string;
    label: string;
    /** Light, underlined link for use on the primary gradient. */
    onPrimary?: boolean;
    className?: string;
};

export function AuthSwitchLink({ prompt, to, label, onPrimary = false, className = "" }: AuthSwitchLinkProps) {
    const linkClassName = onPrimary
        ? "underline hover:opacity-80 focus-visible:outline-primary-foreground"
        : "text-primary hover:text-primary-strong hover:underline focus-visible:outline-ring";

    return (
        <p className={`text-sm ${onPrimary ? "opacity-90" : "text-muted-foreground"} ${className}`}>
            {prompt}{" "}
            <Link
                to={to}
                className={`rounded-sm font-semibold underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 ${linkClassName}`}
            >
                {label}
            </Link>
        </p>
    );
}
