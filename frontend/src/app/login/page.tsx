import LoginForm from "@/components/Login/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login - StatusCraft",
};

const LoginPage = () => {
    return (
        <main>
            <h1 className="text-xl md:text-2xl lg:text-3xl">Login</h1>

            <LoginForm />
        </main>
    );
};

export default LoginPage;
