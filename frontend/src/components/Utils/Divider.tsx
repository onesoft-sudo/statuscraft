import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Divider = ({ className = "", ...props }: ComponentProps<"hr">) => {
    return (
        <hr
            className={twMerge(
                "[border-top:1px_solid_#ddd] dark:[border-top:1px_solid_#333] block w-[100%]",
                className
            )}
            {...props}
        />
    );
};

export default Divider;
