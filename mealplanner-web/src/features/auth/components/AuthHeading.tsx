type AuthHeadingProps = {
    /** Id of the h1, so the page section can reference it with aria-labelledby. */
    id: string;
    title: string;
    description: string;
    /** Larger type with light text, for use on the primary gradient. */
    onPrimary?: boolean;
    /** Alignment comes from the parent context, e.g. "items-center text-center". */
    className?: string;
};

export function AuthHeading({ id, title, description, onPrimary = false, className = "" }: AuthHeadingProps) {
    return (
        <div className={`flex flex-col gap-3 ${className}`}>
            <h1
                id={id}
                className={`text-2xl leading-tight font-bold tracking-tight text-balance ${onPrimary ? "sm:text-3xl lg:text-4xl" : "sm:text-[1.75rem]"}`}
            >
                {title}
            </h1>
            <p
                className={`text-sm leading-6 text-pretty ${onPrimary ? "max-w-sm opacity-90 lg:text-base lg:leading-7" : "max-w-xs text-muted-foreground"}`}
            >
                {description}
            </p>
        </div>
    );
}
