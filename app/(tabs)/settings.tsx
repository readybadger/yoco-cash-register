import ThemedText from "@/components/themed/ThemedText";
import useSettings from "@/hooks/use-settings";
import { useThemeColors } from "@/hooks/use-theme-color";
import {
    FlatList,
    ScrollView,
    StyleProp,
    StyleSheet,
    Switch,
    useColorScheme,
    View,
    ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Dropdown from "react-native-input-select";
import { TSelectedItem } from "react-native-input-select/lib/typescript/src/types/index.types";
import CurrencyPicker from "@/components/CurrencyPicker";

export default function Settings() {
    const { settings, updateSettings } = useSettings();
    const safeAreaInsets = useSafeAreaInsets();
    const [backgroundColor, borderColor] = useThemeColors("background", "border");
    const systemColorScheme = useColorScheme();

    const sectionStyle: StyleProp<ViewStyle> = [
        styles.sectionContainer,
        {
            borderColor,
        },
    ];

    const onToggleMatchSystem = (matchSystem: boolean) => {
        updateSettings({
            themeSetting: matchSystem ? "system" : systemColorScheme,
        });
    };

    const onToggleDarkMode = (darkModeOn: boolean) => {
        updateSettings({
            themeSetting: darkModeOn ? "dark" : "light",
        });
    };

    const onToggleAutoScrollChargeList = (autoScrollChargeList: boolean) => {
        updateSettings({
            autoScrollChargeList,
        });
    };

    const onChangeCurrency = (currency: string) => {
        updateSettings({
            currency,
        });
    };

    return (
        <View
            style={[
                {
                    backgroundColor,
                    paddingTop: safeAreaInsets.top + 24,
                },
                styles.container,
            ]}
        >
            <ThemedText style={styles.title}>Settings</ThemedText>
            <ScrollView style={styles.scrolView}>
                <View style={sectionStyle}>
                    <ThemedText style={styles.sectionTitle}>Appearance</ThemedText>
                    <View style={styles.switchValueRow}>
                        <ThemedText style={styles.label}>Match system appearance</ThemedText>
                        <Switch
                            value={settings.themeSetting === "system"}
                            onValueChange={onToggleMatchSystem}
                        />
                    </View>
                    <View style={styles.switchValueRow}>
                        <ThemedText style={styles.label}>Dark mode</ThemedText>
                        <Switch
                            value={
                                (settings.themeSetting === "system" &&
                                    systemColorScheme === "dark") ||
                                settings.themeSetting === "dark"
                            }
                            disabled={settings.themeSetting === "system"}
                            onValueChange={onToggleDarkMode}
                        />
                    </View>
                </View>
                <View style={sectionStyle}>
                    <ThemedText style={styles.sectionTitle}>Point of Sale</ThemedText>
                    <View style={styles.switchValueRow}>
                        <ThemedText style={styles.label}>Auto-scroll charge list</ThemedText>
                        <Switch
                            value={settings.autoScrollChargeList}
                            onValueChange={onToggleAutoScrollChargeList}
                        />
                    </View>
                    <View>
                        <ThemedText style={[styles.label, styles.stackLabel]}>Currency</ThemedText>
                        <CurrencyPicker value={settings.currency} onChange={onChangeCurrency} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 32,
        paddingHorizontal: 24,
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "semibold",
        marginBottom: 16,
    },
    scrolView: {
        flex: 1,
    },
    sectionContainer: {
        paddingHorizontal: 12,
        paddingVertical: 16,
        marginHorizontal: 24,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    label: {
        fontSize: 18,
    },
    stackLabel: {
        marginBottom: 10,
    },
    switchValueRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
    },
});
