import { PropsWithChildren } from "react";
import { MUIThemeProvider } from "./mui";
import StoreProvider from "@/lib/storeProvider";

export default function Providers({ children }: PropsWithChildren) {
    return (
        <MUIThemeProvider>
            <StoreProvider>{children}</StoreProvider>
        </MUIThemeProvider>
    );
}
