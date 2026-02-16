import { createContext } from "react";
import { ColorSchemeName } from "react-native";

export type ColorSchemeSetting = "system" | ColorSchemeName;

export type AppSettings = {
    locale: string;
    currency: string;
    theme: ColorSchemeSetting;
    autoScrollChargeList: boolean;
};

export type AppSettingsProvider = {
    settings: AppSettings;
    updateSettings: (updates: Partial<AppSettings>) => void;
};

export const DEFAULT_APP_SETTINGS: AppSettings = {
    locale: "en-ZA",
    currency: "ZAR",
    theme: "system",
    autoScrollChargeList: true,
};

export const SettingsContext = createContext<AppSettingsProvider>({
    settings: DEFAULT_APP_SETTINGS,
    updateSettings: () => {
        throw new Error("SettingsContext must be used through the SettingsProvider");
    },
});
