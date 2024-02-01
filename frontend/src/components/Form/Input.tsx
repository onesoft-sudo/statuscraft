import {
    ComponentProps,
    FC,
    ForwardRefRenderFunction,
    forwardRef,
} from "react";
import styles from "@/styles/FormField.module.css";

interface InputProps extends ComponentProps<"input"> {}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { className = "", ...props },
    ref
) => {
    return (
        <input
            className={`${styles.input} ${className}`}
            {...props}
            ref={ref}
        />
    );
};

export default forwardRef(Input);
