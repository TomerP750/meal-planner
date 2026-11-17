import {
    ActivityIcon,
    CheckIcon,
    CircleUserRoundIcon,
    DumbbellIcon,
    FlameIcon,
    MailIcon,
    ScaleIcon,
    TargetIcon,
    UserIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Input } from "../../../shared/ui/Input/Input";
import { PasswordInput } from "../../../shared/ui/PasswordInput/PasswordInput";
import { Button } from "../../../shared/ui/Button/Button";
import { GoalType } from "../models/GoalType";
import type { SignUpRequestDto } from "../models/SignUpRequestDto";
import { AuthBrandPanel } from "../components/AuthBrandPanel";
import { AuthSwitchLink } from "../components/AuthSwitchLink";

type GoalColorClassNames = {
    /** Card border and background on hover, selection and keyboard focus. */
    card: string;
    /** Icon tile, tinted by default and solid when selected. */
    iconTile: string;
    /** Check circle when selected. */
    check: string;
};

type GoalOption = {
    value: GoalType;
    icon: LucideIcon;
    description: string;
    colors: GoalColorClassNames;
};

/*
 * No goal tokens exist in the theme, so each goal uses its closest Tailwind palette color
 * (orange = burn, sky = balance, violet = strength). Class strings stay complete for Tailwind to detect.
 */
const goalOptions: GoalOption[] = [
    {
        value: GoalType.LOSE_FAT,
        icon: FlameIcon,
        description: "Calorie-conscious meals",
        colors: {
            card: "hover:border-orange-600 has-checked:border-orange-600 has-checked:bg-orange-50 has-focus-visible:outline-orange-600 dark:hover:border-orange-400 dark:has-checked:border-orange-400 dark:has-checked:bg-orange-950/40 dark:has-focus-visible:outline-orange-400",
            iconTile:
                "bg-orange-100 text-orange-700 group-has-checked:bg-orange-600 group-has-checked:text-white dark:bg-orange-950 dark:text-orange-300 dark:group-has-checked:bg-orange-400 dark:group-has-checked:text-orange-950",
            check: "group-has-checked:border-orange-600 group-has-checked:bg-orange-600 group-has-checked:text-white dark:group-has-checked:border-orange-400 dark:group-has-checked:bg-orange-400 dark:group-has-checked:text-orange-950",
        },
    },
    {
        value: GoalType.MAINTAIN_WEIGHT,
        icon: ScaleIcon,
        description: "Balanced everyday eating",
        colors: {
            card: "hover:border-sky-600 has-checked:border-sky-600 has-checked:bg-sky-50 has-focus-visible:outline-sky-600 dark:hover:border-sky-400 dark:has-checked:border-sky-400 dark:has-checked:bg-sky-950/40 dark:has-focus-visible:outline-sky-400",
            iconTile:
                "bg-sky-100 text-sky-700 group-has-checked:bg-sky-600 group-has-checked:text-white dark:bg-sky-950 dark:text-sky-300 dark:group-has-checked:bg-sky-400 dark:group-has-checked:text-sky-950",
            check: "group-has-checked:border-sky-600 group-has-checked:bg-sky-600 group-has-checked:text-white dark:group-has-checked:border-sky-400 dark:group-has-checked:bg-sky-400 dark:group-has-checked:text-sky-950",
        },
    },
    {
        value: GoalType.GAIN_MUSCLE,
        icon: DumbbellIcon,
        description: "Protein-rich meals",
        colors: {
            card: "hover:border-violet-600 has-checked:border-violet-600 has-checked:bg-violet-50 has-focus-visible:outline-violet-600 dark:hover:border-violet-400 dark:has-checked:border-violet-400 dark:has-checked:bg-violet-950/40 dark:has-focus-visible:outline-violet-400",
            iconTile:
                "bg-violet-100 text-violet-700 group-has-checked:bg-violet-600 group-has-checked:text-white dark:bg-violet-950 dark:text-violet-300 dark:group-has-checked:bg-violet-400 dark:group-has-checked:text-violet-950",
            check: "group-has-checked:border-violet-600 group-has-checked:bg-violet-600 group-has-checked:text-white dark:group-has-checked:border-violet-400 dark:group-has-checked:bg-violet-400 dark:group-has-checked:text-violet-950",
        },
    },
];

type SectionLegendProps = {
    icon: LucideIcon;
    children: ReactNode;
};

function SectionLegend({ icon: Icon, children }: SectionLegendProps) {
    return (
        <legend className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase">
            <Icon aria-hidden="true" size={16} strokeWidth={2} className="shrink-0" />
            {children}
        </legend>
    );
}

export default function SignUpPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignUpRequestDto>();

    // UI only: submission is not implemented yet.
    const onSubmit: SubmitHandler<SignUpRequestDto> = () => {};

    return (
        <section
            aria-labelledby="signup-title"
            className="grid w-full max-w-5xl grid-cols-1 gap-6 lg:h-[min(46rem,calc(100dvh-6rem))] lg:grid-cols-2 lg:grid-rows-[minmax(0,1fr)] lg:gap-8"
        >
            <AuthBrandPanel
                titleId="signup-title"
                title="Create your account"
                description="Tell us a little about you so we can plan meals that fit your goals."
            >
                <AuthSwitchLink prompt="Already have an account?" to="/auth/sign-in" label="Sign in" onPrimary />
            </AuthBrandPanel>

            {/* Form panel: fixed height with its own vertical scroll on large screens; normal page flow below that. */}
            <div className="rounded-2xl border border-divider bg-background/70 p-5 sm:p-8 lg:min-h-0 lg:overflow-y-auto">
                <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                    <fieldset className="flex flex-col gap-5">
                        <SectionLegend icon={CircleUserRoundIcon}>Account</SectionLegend>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
                            <Input
                                label="First name"
                                icon={UserIcon}
                                autoComplete="given-name"
                                placeholder="Jane"
                                error={errors.firstName?.message}
                                {...register("firstName")}
                            />
                            <Input
                                label="Last name"
                                autoComplete="family-name"
                                placeholder="Doe"
                                error={errors.lastName?.message}
                                {...register("lastName")}
                            />
                        </div>

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
                            autoComplete="new-password"
                            placeholder="Create a password"
                            error={errors.password?.message}
                            {...register("password")}
                        />

                        <PasswordInput
                            label="Confirm password"
                            autoComplete="new-password"
                            placeholder="Repeat your password"
                            error={errors.confirmPassword?.message}
                            {...register("confirmPassword")}
                        />
                    </fieldset>

                    <fieldset className="flex flex-col gap-5">
                        <SectionLegend icon={ActivityIcon}>Your body</SectionLegend>

                        <div className="grid grid-cols-3 gap-3">
                            <Input
                                label="Age"
                                type="number"
                                inputMode="numeric"
                                min={1}
                                placeholder="30"
                                error={errors.age?.message}
                                {...register("age", { valueAsNumber: true })}
                            />
                            <Input
                                label="Weight (kg)"
                                type="number"
                                inputMode="decimal"
                                min={1}
                                step="0.5"
                                placeholder="70"
                                error={errors.weight?.message}
                                {...register("weight", { valueAsNumber: true })}
                            />
                            <Input
                                label="Height (cm)"
                                type="number"
                                inputMode="numeric"
                                min={1}
                                placeholder="175"
                                error={errors.height?.message}
                                {...register("height", { valueAsNumber: true })}
                            />
                        </div>
                    </fieldset>

                    <fieldset className="flex flex-col">
                        <SectionLegend icon={TargetIcon}>Your goal</SectionLegend>

                        <div className="flex flex-col gap-3">
                            {goalOptions.map(({ value, icon: Icon, description, colors }) => (
                                <label
                                    key={value}
                                    className={`group relative flex cursor-pointer items-center gap-4 rounded-xl border border-input-border bg-input p-3 transition-colors duration-150 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 motion-reduce:transition-none ${colors.card}`}
                                >
                                    <input type="radio" value={value} className="sr-only" {...register("goal")} />

                                    <span
                                        className={`flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-150 motion-reduce:transition-none ${colors.iconTile}`}
                                    >
                                        <Icon aria-hidden="true" size={20} strokeWidth={1.75} />
                                    </span>

                                    <span className="flex min-w-0 flex-1 flex-col">
                                        <span className="text-sm font-semibold text-foreground">{value}</span>
                                        <span className="text-sm text-muted-foreground">{description}</span>
                                    </span>

                                    <span
                                        aria-hidden="true"
                                        className={`flex size-5 shrink-0 items-center justify-center rounded-full border border-input-border ${colors.check}`}
                                    >
                                        <CheckIcon size={14} strokeWidth={3} className="hidden group-has-checked:block" />
                                    </span>
                                </label>
                            ))}
                        </div>

                        {errors.goal && <p className="mt-2 text-sm text-danger">{errors.goal.message}</p>}
                    </fieldset>

                    <Button type="submit" variant="gradient" isLoading={isSubmitting} className="w-full">
                        Create account
                    </Button>
                </form>
            </div>
        </section>
    );
}
