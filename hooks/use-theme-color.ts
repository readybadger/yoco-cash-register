import { Colors } from "@/constants/theme";
import { ColorName } from "@/constants/types";
import useSettings from "./use-settings";

export function useThemeColors(colorName: ColorName): string;
export function useThemeColors(...colorNames: ColorName[]): string[];
export function useThemeColors(...colorNames: ColorName[]): string | string[] {
    const { theme } = useSettings();

    if (arguments.length === 1) {
        return Colors[theme][colorNames[0]];
    }

    return colorNames.map((colorName) => Colors[theme][colorName]);
}
