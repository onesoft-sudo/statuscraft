"use client";

import useMediaQuery from "./useMediaQuery";

export function useDeviceType() {
    return useMediaQuery("(min-width: 1000px)") ? "desktop" : "mobile";
}

export function useIsDesktop() {
    return useDeviceType() === "desktop";
}

export function useIsMobile() {
    return useDeviceType() === "mobile";
}
