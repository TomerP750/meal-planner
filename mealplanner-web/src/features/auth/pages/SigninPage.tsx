import { MailIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { SignInRequestDto } from "../models/SignInRequestDto";
import { AuthLogo } from "../components/AuthLogo";
import { AuthHeading } from "../components/AuthHeading";
import { AuthSwitchLink } from "../components/AuthSwitchLink";
import { Input } from "../../../shared/ui/Input/Input";
import { PasswordInput } from "../../../shared/ui/PasswordInput/PasswordInput";
import { Button } from "../../../shared/ui/Button/Button";

export default function SigninPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInRequestDto>();

    // UI only: submission is not implemented yet.
    const onSubmit: SubmitHandler<SignInRequestDto> = () => {};

    return (
        <section aria-labelledby="signin-title" className="flex w-full max-w-sm flex-col gap-8">
            <header className="flex flex-col items-center gap-8">
                <AuthLogo />
                <AuthHeading
                    id="signin-title"
                    title="Welcome back"
                    description="Sign in to continue planning your healthy week."
                    className="items-center text-center"
                />
            </header>

            <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <Input
                    label="Email"
                    type="email"
                    icon={MailIcon}
                    autoComplete="email"
                    placeholder="you@example.com"
                    error={errors.email?.message}
                    {...register("email")}
                />

                <PasswordInput
                    label="Password"
                    placeholder="Enter your password"
                    error={errors.password?.message}
                    {...register("password")}
                />

                <Button type="submit" isLoading={isSubmitting} className="mt-2 w-full">
                    Sign in
                </Button>
            </form>

            <AuthSwitchLink
                prompt="Don't have an account?"
                to="/auth/sign-up"
                label="Sign up"
                className="text-center"
            />
        </section>
    );
}
