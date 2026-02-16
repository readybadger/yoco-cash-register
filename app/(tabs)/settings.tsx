import { ScrollView, StyleSheet } from "react-native";

import { ThemedView } from "@/components/themed-view";

export default function Settings() {
    return (
        <ScrollView>
            <ThemedView style={styles.titleContainer}></ThemedView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: "#808080",
        bottom: -90,
        left: -35,
        position: "absolute",
    },
    titleContainer: {
        flexDirection: "row",
        gap: 8,
    },
});
