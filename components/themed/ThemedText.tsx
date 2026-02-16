import { ColorName, ColorVariant } from "@/constants/types";
import { useThemeColors } from "@/hooks/use-theme-color";
import { Text, TextProps } from "react-native";

type ThemedTextProps = {
    variant?: ColorVariant;
} & TextProps;

const ThemedText = ({ variant = "primary", style, ...textProps }: ThemedTextProps) => {
    const colorName: ColorName = variant === "secondary" ? "textSecondary" : "text";
    const textColor = useThemeColors(colorName);
    return (
        <Text
            style={[
                {
                    color: textColor,
                },
                style,
            ]}
            {...textProps}
        />
    );
};

export default ThemedText;
