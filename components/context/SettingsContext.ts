import { createContext } from "react";
import { ColorSchemeName } from "react-native";

export type ColorSchemeSetting = "system" | ColorSchemeName;

export type AppSettings = {
    locale: string;
    currency: string;
    themeSetting: ColorSchemeSetting;
    autoScrollChargeList: boolean;
};

export type AppSettingsProvider = {
    settings: AppSettings;
    theme: Extract<ColorSchemeName, "light" | "dark">;
    updateSettings: (updates: Partial<AppSettings>) => void;
};

export const DEFAULT_APP_SETTINGS: AppSettings = {
    locale: "en-ZA",
    currency: "ZAR",
    themeSetting: "light",
    autoScrollChargeList: true,
};

export const SettingsContext = createContext<AppSettingsProvider>({
    settings: DEFAULT_APP_SETTINGS,
    theme: "light",
    updateSettings: () => {
        throw new Error("SettingsContext must be used through the SettingsProvider");
    },
});
