import Link from "next/link";

export default function Footer() {
    return (
        <footer className="my-4 text-center">
            <p className="text-gray-600 dark:text-gray-300">
                Powered by{" "}
                <Link
                    href="/"
                    className="text-blue-500 hover:text-blue-600 hover:underline"
                >
                    StatusCraft
                </Link>
            </p>
        </footer>
    );
}
