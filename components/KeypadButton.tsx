import { Pressable, PressableProps } from "react-native";
import ThemedText from "./themed/ThemedText";
import { PropsWithChildren } from "react";

type KeypadButtonProps = PressableProps & PropsWithChildren;

export default function KeypadButton({ children, ...pressableProps }: KeypadButtonProps) {
    return (
        <Pressable {...pressableProps} style={{ padding: 20 }}>
            <ThemedText>{children}</ThemedText>
        </Pressable>
    );
}
