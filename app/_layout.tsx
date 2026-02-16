import SettingsProvider from "@/components/context/SettingsProvider";
import { ThemeProvider } from "@/components/context/ThemeProvider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export const unstable_settings = {
    anchor: "(tabs)",
};

export default function RootLayout() {
    return (
        <SettingsProvider>
            <ThemeProvider>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen
                        name="modal"
                        options={{ presentation: "modal", title: "Modal" }}
                    />
                </Stack>
                <StatusBar style="auto" />
            </ThemeProvider>
        </SettingsProvider>
    );
}
