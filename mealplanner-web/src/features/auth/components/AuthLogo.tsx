import { Link } from "react-router-dom";
import logo from "../../../assets/logo.webp";

type AuthLogoProps = {
    /** Places the logo on a white badge with a light focus ring, for use on the primary gradient. */
    onPrimary?: boolean;
    className?: string;
};

export function AuthLogo({ onPrimary = false, className = "" }: AuthLogoProps) {
    const variantClassName = onPrimary
        ? "rounded-xl bg-white px-4 py-2 shadow-card focus-visible:outline-primary-foreground"
        : "rounded-md focus-visible:outline-ring";

    return (
        <Link
            to="/"
            className={`inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 ${variantClassName} ${className}`}
        >
            <img
                src={logo}
                alt="Meal Planner home"
                className={onPrimary ? "h-10 w-auto sm:h-12" : "h-14 w-auto sm:h-16"}
            />
        </Link>
    );
}
