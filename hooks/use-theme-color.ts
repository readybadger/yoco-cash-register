import { useColorScheme } from "react-native";
import { Colours } from "@/constants/theme";
import { ColourName } from "@/constants/types";

// export function useThemeColors(colorName: ColourName) {
//     const theme = useColorScheme() ?? "light";
//     return Colours[theme][colorName];
// }

export function useThemeColors(colorName: ColourName): string;
export function useThemeColors(...colorNames: ColourName[]): string[];
export function useThemeColors(...colorNames: ColourName[]): string | string[] {
    const theme = useColorScheme() ?? "light";

    if (arguments.length === 1) {
        return Colours[theme][colorNames[0]];
    }

    return colorNames.map((colorName) => Colours[theme][colorName]);
}
