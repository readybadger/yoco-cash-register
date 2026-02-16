import { useColorScheme } from "react-native";
import { Colors } from "@/constants/theme";
import { ColorName } from "@/constants/types";
import useSettings from "./use-settings";

export function useThemeColors(colorName: ColorName): string;
export function useThemeColors(...colorNames: ColorName[]): string[];
export function useThemeColors(...colorNames: ColorName[]): string | string[] {
    const systemColorScheme = useColorScheme();
    const { settings } = useSettings();
    const theme = (settings.theme === "system" ? systemColorScheme : settings.theme) || "light";

    if (arguments.length === 1) {
        return Colors[theme][colorNames[0]];
    }

    return colorNames.map((colorName) => Colors[theme][colorName]);
}
