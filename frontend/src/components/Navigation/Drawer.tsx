import { links } from "@/config/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import IconButton from "../Buttons/IconButton";
import Brand from "./Brand";

interface DrawerProps {
    isOpen: boolean;
    onClose?: () => void;
}

const Drawer: FC<DrawerProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();

    return (
        <aside
            className={twMerge(
                "flex flex-col fixed top-0 z-[101] h-[100svh] w-[70vw] bg-[rgba(255,255,255,0.1)] dark:bg-[rgba(255,255,255,0.1)] backdrop-blur-lg dark:backdrop-blur-xl [transition:0.3s_ease]",
                isOpen ? "left-0" : "-left-[71vw]"
            )}
        >
            <div className="bg-[rgba(255,255,255,0.3)] dark:bg-[#222] py-1 px-2 flex justify-between">
                <Brand />
                <IconButton
                    onClick={onClose}
                    className="text-black dark:text-white"
                >
                    <MdClose size="1.3rem" />
                </IconButton>
            </div>

            <ul className="list-none flex flex-col px-3 my-2">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link
                            href={link.url}
                            title={link.name}
                            target={link.newWindow ? "_blank" : undefined}
                            className={twMerge(
                                "flex justify-between items-center my-[2px] py-1 px-2 hover:bg-[rgba(255,255,255,0.3)] dark:hover:bg-[#444] rounded-md",
                                pathname === link.url
                                    ? "bg-[rgba(255,255,255,0.3)] dark:bg-[#444]"
                                    : ""
                            )}
                        >
                            <span>{link.name}</span>
                            {link.newWindow && (
                                <HiOutlineArrowTopRightOnSquare className="ml-1" />
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Drawer;
