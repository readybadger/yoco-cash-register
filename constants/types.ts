import { Colours } from "./theme";

export type ColourVariant = "primary" | "secondary";

export type ColourName = keyof typeof Colours.light & keyof typeof Colours.dark;
