import {
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    ViewStyle,
} from "react-native";
import ThemedText from "@/components/themed/ThemedText";
import { PropsWithChildren } from "react";
import { useThemeColors } from "@/hooks/use-theme-color";

type KeypadButtonProps = TouchableOpacityProps &
    PropsWithChildren & { style?: StyleProp<ViewStyle> };

export default function KeypadButton({ children, style, ...pressableProps }: KeypadButtonProps) {
    const [backgroundColor, borderColor] = useThemeColors("backgroundInteractive", "border");
    return (
        <View style={styles.container}>
            <TouchableOpacity {...pressableProps}>
                <View
                    style={[
                        styles.button,
                        {
                            backgroundColor,
                            borderColor,
                        },
                        style,
                    ]}
                >
                    <ThemedText style={styles.text}>{children}</ThemedText>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        borderTopWidth: 1,
        borderRightWidth: 1,
    },
    text: {
        fontSize: 24,
        fontWeight: "semibold",
    },
});
