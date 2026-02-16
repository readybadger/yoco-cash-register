import { useState } from "react";
import AmountKeypad from "./AmountKeypad";
import CurrentAmount from "./CurrentAmount";

type CurrentAmountInputProps = {
    onAdd: (value: number) => void;
};

const MAX_SUPPORTED_AMOUNT = 100000000;

export default function CurrentAmountInput({ onAdd }: CurrentAmountInputProps) {
    const [amount, setAmount] = useState("");

    const parsedAmount = parseInt(amount) || 0;

    const onNumberPressed = (digit: string) => {
        const newAmountString = `${amount}${digit}`;
        const newAmount = parseInt(newAmountString) || 0;
        if (newAmount < MAX_SUPPORTED_AMOUNT) {
            setAmount(newAmountString);
        }
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
