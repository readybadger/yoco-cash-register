import ThemedText from "@/components/themed/ThemedText";
import useSettings from "@/hooks/use-settings";
import { useThemeColors } from "@/hooks/use-theme-color";
import { ScrollView, StyleSheet, Switch, useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Settings() {
    const { settings, updateSettings } = useSettings();
    const safeAreaInsets = useSafeAreaInsets();
    const backgroundColor = useThemeColors("background");
    const systemColorScheme = useColorScheme();

    const onToggleMatchSystem = (matchSystem: boolean) => {
        updateSettings({
            theme: matchSystem ? "system" : systemColorScheme,
        });
    };

    const onToggleDarkMode = (darkModeOn: boolean) => {
        updateSettings({
            theme: darkModeOn ? "dark" : "light",
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
                <View style={styles.valueContainer}>
                    <ThemedText style={styles.subHeading}>Appearance</ThemedText>
                    <View style={styles.switchValueRow}>
                        <ThemedText style={styles.label}>Match system appearance</ThemedText>
                        <Switch
                            value={settings.theme === "system"}
                            onValueChange={onToggleMatchSystem}
                        />
                    </View>
                    <View style={styles.switchValueRow}>
                        <ThemedText style={styles.label}>Dark mode</ThemedText>
                        <Switch
                            value={
                                (settings.theme === "system" && systemColorScheme === "dark") ||
                                settings.theme === "dark"
                            }
                            disabled={settings.theme === "system"}
                            onValueChange={onToggleDarkMode}
                        />
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
    },
    subHeading: {
        fontSize: 24,
        fontWeight: "semibold",
        marginBottom: 16,
    },
    scrolView: {
        flex: 1,
    },
    valueContainer: {
        paddingHorizontal: 32,
        paddingVertical: 16,
    },
    label: {
        fontSize: 18,
    },
    switchValueRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
    },
});
