import { useColorScheme } from "react-native";
import { Colors } from "@/constants/theme";
import { ColorName } from "@/constants/types";

export function useThemeColors(colorName: ColorName): string;
export function useThemeColors(...colorNames: ColorName[]): string[];
export function useThemeColors(...colorNames: ColorName[]): string | string[] {
    const theme = useColorScheme() ?? "light";

    if (arguments.length === 1) {
        return Colors[theme][colorNames[0]];
    }

    return colorNames.map((colorName) => Colors[theme][colorName]);
}
