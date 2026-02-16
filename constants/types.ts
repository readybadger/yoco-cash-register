import { Colors } from "./theme";

export type ColorVariant = "primary" | "secondary";

export type ColorName = keyof typeof Colors.light & keyof typeof Colors.dark;
