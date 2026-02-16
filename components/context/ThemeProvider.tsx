import useSettings from "@/hooks/use-settings";
import {
    ThemeProvider as ReactNavigationThemeProvider,
    DarkTheme,
    DefaultTheme,
} from "@react-navigation/native";
import { PropsWithChildren } from "react";

export function ThemeProvider({ children }: PropsWithChildren) {
    const { theme } = useSettings();

    return (
        <ReactNavigationThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
            {children}
        </ReactNavigationThemeProvider>
    );
}
