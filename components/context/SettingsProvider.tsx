import { PropsWithChildren, useState } from "react";
import { AppSettings, DEFAULT_APP_SETTINGS, SettingsContext } from "./SettingsContext";
import { useColorScheme } from "react-native";

export default function SettingsProvider({ children }: PropsWithChildren) {
    const [settings, setSettings] = useState<AppSettings>(DEFAULT_APP_SETTINGS);
    const systemColorScheme = useColorScheme();

    const theme =
        (settings.themeSetting === "system" ? systemColorScheme : settings.themeSetting) || "light";

    const updateSettings = (updates: Partial<AppSettings>) => {
        setSettings({
            ...settings,
            ...updates,
        });
    };

    return (
        <SettingsContext.Provider
            value={{
                settings,
                theme,
                updateSettings,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
}
