import { SettingsContext } from "@/components/context/SettingsContext";
import { useContext } from "react";

export default function useSettings() {
    return useContext(SettingsContext);
}
