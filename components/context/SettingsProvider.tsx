import { PropsWithChildren, useState } from "react";
import { AppSettings, DEFAULT_APP_SETTINGS, SettingsContext } from "./SettingsContext";

export default function SettingsProvider({ children }: PropsWithChildren) {
    const [settings, setSettings] = useState<AppSettings>(DEFAULT_APP_SETTINGS);

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
                updateSettings,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
}
