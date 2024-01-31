"use client";

import useMediaQuery from "./useMediaQuery";

export function useDeviceType() {
    return useMediaQuery("(min-width: 1001px)") ? "desktop" : "mobile";
}

export function useDetailedDeviceType() {
    const isDesktop = useMediaQuery("(min-width: 1001px)");
    const isTablet = useMediaQuery(
        "(max-width: 1000px) and (min-width: 700px)"
    );
    return isDesktop ? "desktop" : isTablet ? "tablet" : "mobile";
}

export function useIsDesktop() {
    return useDeviceType() === "desktop";
}

export function useIsMobile() {
    return useDeviceType() === "mobile";
}
