import ChargeList from "@/components/ChargeList";
import CurrentAmountInput from "@/components/CurrentAmountInput";
import { useThemeColors } from "@/hooks/use-theme-color";
import { Charge } from "@/types/point-of-sale";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PointOfSale() {
    const safeAreaInsets = useSafeAreaInsets();
    const [charges, setCharges] = useState<Charge[]>([
        { amount: 100.2, key: "1" },
        { amount: 99.99, key: "2" },
        { amount: 5.8, key: "3" },
        { amount: 13.0, key: "4" },
        { amount: 702.0, key: "5" },
        { amount: 90823, key: "6" },
        { amount: 301, key: "7" },
        { amount: 17.27, key: "8" },
        { amount: 10.05, key: "9" },
    ]);
    const backgroundColor = useThemeColors("background");

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
                    backgroundColor,
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
