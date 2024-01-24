import { LinkItem } from "@/config/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

interface LinkItemProps {
    item: LinkItem;
}

const LinkItem: FC<LinkItemProps> = ({ item }) => {
    const pathname = usePathname();

    return (
        <li>
            <Link
                href={item.url}
                title={item.name}
                target={item.newWindow ? "_blank" : undefined}
                className={twMerge(
                    "inline-flex items-center text-gray-700 hover:text-black focus:text-black dark:text-gray-300 dark:hover:text-white dark:focus:text-white",
                    pathname === item.url ? "text-black dark:text-white" : ""
                )}
            >
                <span>{item.name}</span>
                {item.newWindow && (
                    <HiOutlineArrowTopRightOnSquare className="ml-1" />
                )}
            </Link>
        </li>
    );
};

export default LinkItem;
