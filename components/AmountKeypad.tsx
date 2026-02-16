import { View } from "react-native";
import KeypadButton from "./KeypadButton";

type AmountKeypadProps = {
    onNumberPressed: (digit: string) => void;
    onDeletePressed: VoidFunction;
    onAddPressed: VoidFunction;
};

export default function AmountKeypad({
    onNumberPressed,
    onDeletePressed,
    onAddPressed,
}: AmountKeypadProps) {
    return (
        <View>
            <KeypadButton onPress={() => onNumberPressed("1")}>1</KeypadButton>
            <KeypadButton onPress={() => onNumberPressed("2")}>2</KeypadButton>
            <KeypadButton onPress={() => onNumberPressed("3")}>3</KeypadButton>
            <KeypadButton onPress={() => onNumberPressed("4")}>4</KeypadButton>
            <KeypadButton onPress={() => onNumberPressed("5")}>5</KeypadButton>
            <KeypadButton onPress={() => onNumberPressed("6")}>6</KeypadButton>
            <KeypadButton onPress={() => onNumberPressed("7")}>7</KeypadButton>
            <KeypadButton onPress={() => onNumberPressed("8")}>8</KeypadButton>
            <KeypadButton onPress={() => onNumberPressed("9")}>9</KeypadButton>
            <KeypadButton onPress={onDeletePressed}>DEL</KeypadButton>
            <KeypadButton onPress={() => onNumberPressed("0")}>0</KeypadButton>
            <KeypadButton onPress={onAddPressed}>ADD</KeypadButton>
        </View>
    );
}
