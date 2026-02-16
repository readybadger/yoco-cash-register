import { View, type ViewProps } from "react-native";

import { useThemeColors } from "@/hooks/use-theme-color";
import { ColourName, ColourVariant } from "@/constants/types";

export type ThemedViewProps = ViewProps & {
    variant?: ColourVariant;
    lightColor?: string;
    darkColor?: string;
};

export function ThemedView({ style, variant = "primary", ...otherProps }: ThemedViewProps) {
    const colour: ColourName = variant === "secondary" ? "backgroundSecondary" : "background";
    const backgroundColor = useThemeColors(colour);

    return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
