"use client";

import { useIsDesktop } from "@/hooks/useDeviceType";
import { useState } from "react";
import { MdMenu, MdSearch } from "react-icons/md";
import IconButton from "../Buttons/IconButton";
import Brand from "./Brand";
import Buttons from "./Buttons";
import Drawer from "./Drawer";
import Links from "./Links";

const Navbar = () => {
    const isDesktop = useIsDesktop();
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <nav className="z-[100] py-2 px-3 bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.6)] backdrop-blur-lg shadow-sm shadow-gray-200 dark:shadow-gray-700 grid grid-cols-[1fr_7fr_1fr] lg:grid-cols-[1.5fr_5fr_1.5fr] sticky top-0 left-0">
                {!isDesktop && (
                    <IconButton
                        className="place-self-start text-gray-500 dark:text-white"
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MdMenu size="1.4rem" />
                    </IconButton>
                )}
                <Brand />
                {isDesktop && <Links />}
                {isDesktop && <Buttons />}
                {!isDesktop && (
                    <IconButton
                        className="place-self-start text-gray-500 dark:text-white"
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MdSearch size="1.4rem" />
                    </IconButton>
                )}
            </nav>
            {!isDesktop && drawerOpen && (
                <div
                    className="top-0 left-0 fixed w-[100svw] h-[100svh] bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(0,0,0,0.1)] z-[101]"
                    onClick={() => setDrawerOpen(false)}
                ></div>
            )}
            {!isDesktop && (
                <Drawer
                    isOpen={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;
