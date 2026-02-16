import { Charge } from "@/types/point-of-sale";
import ThemedText from "./themed/ThemedText";
import { FlatList, StyleSheet, View } from "react-native";
import { useThemeColors } from "@/hooks/use-theme-color";
import useCurrencyFormatter from "@/hooks/use-currency-formatter";
import EmptyChargeListMessage from "./EmptyChargeListMessage";
import { useEffect, useMemo, useRef } from "react";

type ChargeListProps = {
    charges: Charge[];
};

export default function ChargeList({ charges }: ChargeListProps) {
    const [backgroundColor, dividerColor] = useThemeColors("backgroundSecondary", "textSecondary");
    const flatListRef = useRef<FlatList<Charge>>(null);
    const { format } = useCurrencyFormatter();

    const total = useMemo(
        () => charges.reduce((total, charge) => total + charge.amount, 0),
        [charges],
    );

    useEffect(() => {
        flatListRef?.current?.scrollToEnd();
    }, [charges]);

    return (
        <View
            style={[
                {
                    backgroundColor,
                },
                styles.container,
            ]}
        >
            <FlatList<Charge>
                ref={flatListRef}
                style={styles.list}
                contentContainerStyle={styles.listContainer}
                data={charges}
                ListEmptyComponent={EmptyChargeListMessage}
                renderItem={({ item: { amount } }) => (
                    <ThemedText style={[styles.listItem, styles.chargeText]} variant="secondary">
                        {format(amount)}
                    </ThemedText>
                )}
            />
            {total ? (
                <>
                    <View style={[{ backgroundColor: dividerColor }, styles.divider]} />
                    <ThemedText variant="secondary" style={[styles.chargeText, styles.totalText]}>
                        {format(total)}
                    </ThemedText>
                </>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    list: {
        flex: 1,
    },
    listContainer: {
        flexGrow: 1,
        paddingVertical: 12,
        alignSelf: "stretch",
        justifyContent: "flex-end",
    },
    listItem: {
        paddingVertical: 8,
    },
    chargeText: {
        textAlign: "right",
        paddingHorizontal: 46,
        fontSize: 22,
    },
    totalText: {
        paddingVertical: 20,
    },
    divider: {
        height: StyleSheet.hairlineWidth * 4,
        marginHorizontal: 24,
    },
});
