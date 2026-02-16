import CurrentAmountInput from "@/components/CurrentAmountInput";

import { SafeAreaView } from "react-native-safe-area-context";

export default function PointOfSale() {
    return (
        <SafeAreaView>
            <CurrentAmountInput onAdd={alert} />
        </SafeAreaView>
    );
}
