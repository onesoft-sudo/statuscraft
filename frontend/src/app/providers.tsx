import { PropsWithChildren } from "react";
import { MUIThemeProvider } from "./mui";

export default function Providers({ children }: PropsWithChildren) {
    return <MUIThemeProvider>{children}</MUIThemeProvider>;
}
