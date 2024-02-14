import LoginForm from "@/components/Login/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login - StatusCraft",
};

const LoginPage = () => {
    return (
        <main className="py-5 lg:py-10 bg-gray-50 dark:bg-transparent h-[100%] w-[100svw]">
            <div className="flex justify-center items-center min-h-[65vh]">
                <div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-center pb-10">
                        Login
                    </h1>

                    <LoginForm />
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
