export type LinkItem = {
    name: string;
    url: string;
    newWindow?: boolean;
};

export const links: LinkItem[] = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "About",
        url: "/about",
    },
    {
        name: "Support",
        url: "/support",
    },
    {
        name: "Get started",
        url: "/start",
    },
    {
        name: "GitHub",
        url: "https://github.com/onesoft-sudo",
        newWindow: true,
    },
];
