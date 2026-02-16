import { useCallback } from "react";

import useSettings from "./use-settings";

export default function useCurrencyFormatter(): {
    format: (value: number) => string;
} {
    const { locale, currency } = useSettings();
    const formatter = Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
    });
    const format = useCallback(
        (value: number) => {
            const amount = value / 10;
            return formatter.format(amount);
        },
        [formatter],
    );
    return {
        format,
    };
}
