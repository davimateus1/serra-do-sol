import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#FEC93E",
    800: "#F09600",
    700: "#2a69ac",
    600: "#F8580E",
  },
  rgba: {
    black: "rgba(0, 0, 0, 0.7)",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
};

const fonts = {
  heading: `'Open Sans', sans-serif`,
  body: `'Raleway', sans-serif`,
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

export const Theme = extendTheme({ colors, fonts, breakpoints });
