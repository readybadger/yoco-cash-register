import { Charge } from "@/types/point-of-sale";
import ThemedText from "./themed/ThemedText";
import { FlatList, StyleSheet } from "react-native";
import { useThemeColors } from "@/hooks/use-theme-color";
import useCurrencyFormatter from "@/hooks/use-currency-formatter";

type ChargeListProps = {
    charges: Charge[];
};

export default function ChargeList({ charges }: ChargeListProps) {
    const backgroundColor = useThemeColors("backgroundSecondary");
    const { format } = useCurrencyFormatter();

    return (
        <FlatList<Charge>
            style={[
                {
                    backgroundColor,
                },
            ]}
            contentContainerStyle={styles.list}
            data={charges}
            renderItem={({ item: { amount } }) => (
                <ThemedText style={styles.listItem} variant="secondary">
                    {format(amount)}
                </ThemedText>
            )}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        paddingVertical: 12,
        flexGrow: 1,
        alignSelf: "stretch",
    },
    listItem: {
        textAlign: "right",
        paddingRight: 24,
        paddingVertical: 8,
    },
});
