import LoginForm from "@/components/Login/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login - StatusCraft",
};

const LoginPage = () => {
    return (
        <main className="py-5 lg:py-10 bg-gray-50 dark:bg-transparent h-[100%] w-[100svw]">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">
                Login
            </h1>

            <LoginForm />
        </main>
    );
};

export default LoginPage;
