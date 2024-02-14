"use client";

import {
    ComponentProps,
    FC,
    ForwardRefRenderFunction,
    forwardRef,
    useRef,
    useState,
} from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentProps<"input"> {
    label?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { className = "", label, onFocus, onBlur, ...props },
    ref
) => {
    const [focused, setFocused] = useState(false);
    const internalRef = useRef<HTMLInputElement>(null);

    return (
        <div
            className={twMerge(
                "border-[rgba(255,255,255,0.1)] border-2 rounded-md px-2 pb-[0.3em] pt-2 relative cursor-text",
                focused ? "border-[rgba(0,123,255,1)]" : ""
            )}
            onClick={() => internalRef.current?.focus()}
        >
            <span className="pb-3 block"></span>
            {label && (
                <label
                    htmlFor={props.id}
                    className={twMerge(
                        "[transition:0.25s] absolute top-1.5 left-2 select-none text-[#999]",
                        focused || internalRef.current?.value
                            ? "pb-1 block text-xs"
                            : "top-[50%] left-2 translate-y-[-50%]",
                        focused ? "text-[#007bff]" : ""
                    )}
                >
                    {label}
                </label>
            )}
            <input
                className={`outline-none border-none bg-transparent w-[100%] block ${
                    label ? "mt-1" : ""
                } ${className}`}
                {...props}
                ref={ref ?? internalRef}
                onFocus={(e) => {
                    setFocused(true);
                    onFocus?.(e);
                }}
                onBlur={(e) => {
                    setFocused(false);
                    onBlur?.(e);
                }}
            />
        </div>
    );
};

export default forwardRef(Input);
