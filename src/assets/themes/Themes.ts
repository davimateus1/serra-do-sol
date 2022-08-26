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
};

const fonts = {
  heading: `'Open Sans', sans-serif`,
  body: `'Raleway', sans-serif`,
};

export const Theme = extendTheme({ colors, fonts });
