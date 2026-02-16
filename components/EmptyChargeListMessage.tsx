import { StyleSheet, View } from "react-native";
import ThemedText from "./themed/ThemedText";

export default function EmptyChargeListMessage() {
    return (
        <View style={styles.noChargesMessage}>
            <ThemedText variant="secondary" style={[styles.noChargesMessageText]}>
                No charges captured
            </ThemedText>
            <ThemedText variant="secondary" style={[styles.noChargesMessageSubText]}>
                Enter an amount and press 'ADD' to add a charge
            </ThemedText>
        </View>
    );
}

const styles = StyleSheet.create({
    noChargesMessage: {
        flex: 1,
        justifyContent: "center",
        paddingRight: 24,
    },
    noChargesMessageText: {
        textAlign: "right",
        fontSize: 20,
        opacity: 0.8,
    },
    noChargesMessageSubText: {
        textAlign: "right",
        fontSize: 14,
        opacity: 0.6,
    },
});
