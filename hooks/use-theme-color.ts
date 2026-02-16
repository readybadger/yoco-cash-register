import { useColorScheme } from "react-native";
import { Colours } from "@/constants/theme";
import { ColourName } from "@/constants/types";

export function useThemeColor(colorName: ColourName) {
    const theme = useColorScheme() ?? "light";
    return Colours[theme][colorName];
}
