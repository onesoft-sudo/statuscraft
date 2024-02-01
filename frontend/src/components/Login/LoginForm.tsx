"use client";

import Button from "../Buttons/Button";
import Input from "../Form/Input";

const LoginForm = () => {
    return (
        <div className="flex justify-center items-center min-h-[65vh]">
            <div className="bg-white dark:bg-[#222] p-3 rounded md:w-[40vw] lg:w-[30vw] xl:w-[20vw] m-2 shadow-[0_0_2px_0_rgba(0,0,0,0.2)] dark:shadow-[0_0_2px_1px_rgba(255,255,255,0.25)]">
                <label htmlFor="username" className="pb-1 block text-[0.9rem]">
                    Username or Email
                </label>
                <Input type="text" name="username" id="username" />
                <br />
                <label htmlFor="password" className="pb-1 block text-[0.9rem]">
                    Password
                </label>
                <Input type="text" name="password" id="password" />
                <br />
                <div className="flex justify-end items-center">
                    <Button type="submit">Login</Button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
