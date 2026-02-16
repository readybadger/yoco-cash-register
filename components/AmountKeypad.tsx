import { StyleSheet, View } from "react-native";
import KeypadButton from "./KeypadButton";

type AmountKeypadProps = {
    onNumberPressed: (digit: number) => void;
    onDeletePressed: VoidFunction;
    onAddPressed: VoidFunction;
};

export default function AmountKeypad({
    onNumberPressed,
    onDeletePressed,
    onAddPressed,
}: AmountKeypadProps) {
    return (
        <>
            <View style={styles.row}>
                <KeypadButton style={styles.leftButton} onPress={() => onNumberPressed(1)}>
                    1
                </KeypadButton>
                <KeypadButton onPress={() => onNumberPressed(2)}>2</KeypadButton>
                <KeypadButton onPress={() => onNumberPressed(3)}>3</KeypadButton>
            </View>
            <View style={styles.row}>
                <KeypadButton style={styles.leftButton} onPress={() => onNumberPressed(4)}>
                    4
                </KeypadButton>
                <KeypadButton onPress={() => onNumberPressed(5)}>5</KeypadButton>
                <KeypadButton onPress={() => onNumberPressed(6)}>6</KeypadButton>
            </View>
            <View style={styles.row}>
                <KeypadButton style={styles.leftButton} onPress={() => onNumberPressed(7)}>
                    7
                </KeypadButton>
                <KeypadButton onPress={() => onNumberPressed(8)}>8</KeypadButton>
                <KeypadButton onPress={() => onNumberPressed(9)}>9</KeypadButton>
            </View>
            <View style={styles.row}>
                <KeypadButton style={styles.leftButton} onPress={onDeletePressed}>
                    DEL
                </KeypadButton>
                <KeypadButton onPress={() => onNumberPressed(0)}>0</KeypadButton>
                <KeypadButton onPress={onAddPressed}>ADD</KeypadButton>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
    leftButton: {
        borderLeftWidth: 1,
    },
});
