import { useState } from "react";
import AmountKeypad from "./AmountKeypad";
import CurrentAmount from "./CurrentAmount";

type CurrentAmountInputProps = {
    onAdd: (value: number) => void;
};

export default function CurrentAmountInput({ onAdd }: CurrentAmountInputProps) {
    const [amount, setAmount] = useState("");

    const parsedAmount = amount ? parseInt(amount) : 0;

    const onNumberPressed = (digit: string) => {
        setAmount(`${amount}${digit}`);
    };

    const onDelPressed = () => {
        setAmount(amount.slice(0, -1));
    };

    const onAddPressed = () => {
        onAdd(parsedAmount);
    };

    return (
        <>
            <CurrentAmount value={parsedAmount} />
            <AmountKeypad
                onNumberPressed={onNumberPressed}
                onDeletePressed={onDelPressed}
                onAddPressed={onAddPressed}
            />
        </>
    );
}
