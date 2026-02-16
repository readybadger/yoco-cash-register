import { Pressable, StyleSheet, Text, View } from "react-native";
import ThemedText from "./themed/ThemedText";
import { useThemeColors } from "@/hooks/use-theme-color";

type CurrencyOption = {
    name: string;
    value: string;
};
const currencyOptions: CurrencyOption[] = [
    { name: "South African rand (ZAR)", value: "ZAR" },
    { name: "Sterling (GBP)", value: "GBP" },
    { name: "Danish krone (DKK)", value: "DKK" },
    { name: "Euro (EUR)", value: "EUR" },
];

type CurrencyPickerProps = {
    value: string;
    onChange: (currency: string) => void;
};

export default function CurrencyPicker({ value, onChange }: CurrencyPickerProps) {
    const [backgroundColor, borderColor] = useThemeColors("backgroundInteractive", "border");
    return (
        <>
            {currencyOptions.map((option) => {
                const isSelected = option.value === value;
                return (
                    <Pressable key={option.value} onPress={() => onChange(option.value)}>
                        <View
                            style={[
                                styles.item,
                                isSelected && styles.selectedItem,
                                {
                                    backgroundColor,
                                    borderColor,
                                },
                            ]}
                        >
                            <View style={styles.iconPlaceholder}>
                                {isSelected ? <Text>✅</Text> : null}
                            </View>
                            <ThemedText
                                style={[styles.itemText, isSelected && styles.selectedItemText]}
                            >
                                {option.name}
                            </ThemedText>
                        </View>
                    </Pressable>
                );
            })}
        </>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        marginBottom: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
    },
    selectedItem: {},
    itemText: {
        fontSize: 16,
    },
    selectedItemText: {
        fontWeight: "bold",
    },
    iconPlaceholder: {
        width: 24,
        justifyContent: "center",
    },
});
