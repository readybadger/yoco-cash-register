import { useState } from "react";
import AmountKeypad from "./AmountKeypad";
import CurrentAmountDisplay from "./CurrentAmountDisplay";

type CurrentAmountInputProps = {
    onAdd: (value: number) => void;
};

const MAX_SUPPORTED_AMOUNT = 100000000;

export default function CurrentAmountInput({ onAdd }: CurrentAmountInputProps) {
    const [amount, setAmount] = useState(0);

    const onNumberPressed = (digit: number) => {
        const newAmount = amount * 10 + digit;
        if (newAmount < MAX_SUPPORTED_AMOUNT) {
            setAmount(newAmount);
        }
    };

    const onDelPressed = () => {
        if (amount > 0) {
            setAmount(Math.trunc(amount / 10));
        }
    };

    const onAddPressed = () => {
        if (amount) {
            onAdd(amount);
            setAmount(0);
        }
    };

    return (
        <>
            <CurrentAmountDisplay value={amount} />
            <AmountKeypad
                onNumberPressed={onNumberPressed}
                onDeletePressed={onDelPressed}
                onAddPressed={onAddPressed}
            />
        </>
    );
}
