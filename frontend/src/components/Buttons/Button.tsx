import Link from "next/link";
import { ComponentProps, FC, JSX, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props<E extends keyof JSX.IntrinsicElements | FC> = {
    as?: E;
    children?: ReactNode;
    className?: string;
    href?: string;
} & Omit<ComponentProps<E>, "as">;

const Button = <E extends keyof JSX.IntrinsicElements | FC = "button">({
    as = "button" as E,
    children,
    className = "",
    href,
    ...props
}: Props<E>) => {
    const Component = (href ? Link : as) as FC<typeof props>;

    return (
        <Component
            href={href}
            {...props}
            className={twMerge(
                "px-4 py-1 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-blue-700 focus:outline-2 focus:outline-double focus:outline-offset-2",
                className
            )}
        >
            {children}
        </Component>
    );
};

export default Button;
