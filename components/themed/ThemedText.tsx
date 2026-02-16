import { ColourName, ColourVariant } from "@/constants/types";
import { useThemeColors } from "@/hooks/use-theme-color";
import { Text, TextProps } from "react-native";

type ThemedTextProps = {
    variant?: ColourVariant;
} & TextProps;

const ThemedText = ({ variant = "primary", style, ...textProps }: ThemedTextProps) => {
    const colourName: ColourName = variant === "secondary" ? "textSecondary" : "text";
    const textColour = useThemeColors(colourName);
    return (
        <Text
            style={[
                {
                    color: textColour,
                },
                style,
            ]}
            {...textProps}
        />
    );
};

export default ThemedText;
