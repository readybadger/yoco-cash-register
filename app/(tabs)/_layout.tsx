import { Tabs } from "expo-router";
import React from "react";

import FontAwesomeIcon from "@expo/vector-icons/FontAwesome5";

import { Colors } from "@/constants/theme";
import { useColorScheme } from "react-native";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const screensWithHeader = ["settings"];

    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                headerShown: screensWithHeader.includes(route.name),
            })}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "POS",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon name="cash-register" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon name="cog" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
