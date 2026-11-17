import { useState } from "react";
import type { ComponentProps } from "react";
import { EyeIcon, EyeOffIcon, LockIcon } from "lucide-react";
import { Input } from "../Input/Input";

type PasswordInputProps = Omit<ComponentProps<typeof Input>, "type" | "icon" | "iconPosition" | "action">;

export function PasswordInput({ autoComplete = "current-password", disabled, ...props }: PasswordInputProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ToggleIcon = isVisible ? EyeOffIcon : EyeIcon;

    return (
        <Input
            type={isVisible ? "text" : "password"}
            icon={LockIcon}
            autoComplete={autoComplete}
            disabled={disabled}
            action={
                <button
                    type="button"
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    disabled={disabled}
                    onClick={() => setIsVisible((visible) => !visible)}
                    className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors duration-150 hover:bg-accent hover:text-primary-strong focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:text-disabled-foreground disabled:hover:bg-transparent motion-reduce:transition-none"
                >
                    <ToggleIcon aria-hidden="true" size={18} strokeWidth={1.5} />
                </button>
            }
            {...props}
        />
    );
}
