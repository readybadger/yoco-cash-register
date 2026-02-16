import CurrentAmount from "@/components/CurrentAmount";

import { SafeAreaView } from "react-native-safe-area-context";

export default function PointOfSale() {
    return (
        <SafeAreaView>
            <CurrentAmount value={0} />
        </SafeAreaView>
    );
}
