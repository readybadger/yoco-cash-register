import ChargeList from "@/components/ChargeList";
import CurrentAmountInput from "@/components/CurrentAmountInput";
import { Charge } from "@/types/point-of-sale";
import { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

export default function PointOfSale() {
    const [charges, setCharges] = useState<Charge[]>([]);

    const onAddCharge = (amount: number) => {
        setCharges([
            ...charges,
            {
                amount,
                // This could possibly be swapped out for a randomly generated UUID,
                // or something like an SKU.
                key: Date.now().toString(),
            },
        ]);
    };

    return (
        <SafeAreaView>
            <CurrentAmountInput onAdd={onAddCharge} />
            <ChargeList charges={charges} />
        </SafeAreaView>
    );
}
