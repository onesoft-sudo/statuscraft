"use client";

import { loginAction } from "@/actions/login";
import Button from "../Buttons/Button";
import Input from "../Form/Input";
import { FormEvent } from "react";

const LoginForm = () => {
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        console.log(data.entries());
    };

    return (
        <form
            method="post"
            action="/"
            onSubmit={onSubmit}
            className="relative bg-white dark:bg-[rgba(255,255,255,0.1)] p-3 rounded w-[90vw] sm:w-[85vw] md:w-[40vw] lg:w-[30vw] xl:w-[20vw] m-2 shadow-[0_0_2px_0_rgba(0,0,0,0.2)] dark:shadow-[0_0_2px_1px_rgba(255,255,255,0.25)]"
        >
            <Input
                type="text"
                name="username"
                id="username"
                label="Username or Email"
            />
            <div className="py-3"></div>
            <Input
                type="password"
                name="password"
                id="password"
                label="Password"
            />
            <br />
            <div className="flex justify-end items-center">
                <Button type="submit">Login</Button>
            </div>
        </form>
    );
};

export default LoginForm;
