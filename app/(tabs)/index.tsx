import ChargeList from "@/components/ChargeList";
import CurrentAmountInput from "@/components/CurrentAmountInput";
import { Charge } from "@/types/point-of-sale";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PointOfSale() {
    const safeAreaInsets = useSafeAreaInsets();
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
        <View
            style={[
                {
                    paddingTop: safeAreaInsets.top,
                },
                styles.view,
            ]}
        >
            <CurrentAmountInput onAdd={onAddCharge} />
            <ChargeList charges={charges} />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flexGrow: 1,
    },
});
