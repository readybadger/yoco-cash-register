import { createContext } from "react";

export type AppSettings = {
    locale: string;
    currency: string;
};

export type AppSettingsProvider = {
    settings: AppSettings;
    updateSettings: (updates: Partial<AppSettings>) => void;
};

export const DEFAULT_APP_SETTINGS: AppSettings = {
    locale: "en-ZA",
    currency: "ZAR",
};

export const SettingsContext = createContext<AppSettingsProvider>({
    settings: DEFAULT_APP_SETTINGS,
    updateSettings: () => {
        throw new Error("SettingsContext must be used through the SettingsProvider");
    },
});
