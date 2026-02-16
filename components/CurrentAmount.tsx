import { View, StyleSheet } from "react-native";
import ThemedText from "./themed/ThemedText";

type CurrentAmountProps = {
    value: number;
};
const CurrentAmount = ({ value }: CurrentAmountProps) => {
    const formattedAmount = Intl.NumberFormat("en-ZA", {
        style: "currency",
        currency: "ZAR",
    }).format(value);
    return (
        <View style={styles.currentAmountView}>
            <ThemedText style={styles.currentAmountText}>{formattedAmount}</ThemedText>
        </View>
    );
};

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

export default CurrentAmount;
