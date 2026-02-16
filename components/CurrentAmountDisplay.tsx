import { View, StyleSheet } from "react-native";
import ThemedText from "./themed/ThemedText";
import useCurrencyFormatter from "@/hooks/use-currency-formatter";

type CurrentAmountProps = {
    value: number;
};
export default function CurrentAmountDisplay({ value }: CurrentAmountProps) {
    const { format } = useCurrencyFormatter();
    return (
        <View style={styles.currentAmountView}>
            <ThemedText style={styles.currentAmountText}>{format(value)}</ThemedText>
        </View>
    );
}

const styles = StyleSheet.create({
    currentAmountView: {
        paddingHorizontal: 24,
        paddingVertical: 32,
    },
    currentAmountText: {
        fontSize: 32,
        textAlign: "right",
    },
});
