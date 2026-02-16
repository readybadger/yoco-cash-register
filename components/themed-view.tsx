import { View, type ViewProps } from "react-native";

import { useThemeColors } from "@/hooks/use-theme-color";
import { ColorName, ColorVariant } from "@/constants/types";

export type ThemedViewProps = ViewProps & {
    variant?: ColorVariant;
    lightColor?: string;
    darkColor?: string;
};

export function ThemedView({ style, variant = "primary", ...otherProps }: ThemedViewProps) {
    const color: ColorName = variant === "secondary" ? "backgroundSecondary" : "background";
    const backgroundColor = useThemeColors(color);

    return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
