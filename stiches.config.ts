import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      "blue-5": "#E9EAFC",
      "blue-10": "#DCDEFA",
      "blue-20": "#C9CDF9",
      "blue-25": "#B0B5F5",
      "blue-40": "#3241E8",
      "blue-50": "#2D3BD4",
      "blue-70": "#3735EC",
      "blue-90": "#0029DD",
      error: "#DA1E28",
      success: "#1A8038",
      black: "#000000",
      white: "#FFFFFF",
      "grey-90": "#212121",
      "grey-5": "#FAFAFA",
      "grey-50": "#9E9E9E",
      "grey-10": "#F5F5F5",
      "grey-60": "#757575",
      "grey-20": "#EEEEEE",
      "grey-70": "#616161",
      "grey-30": "#E0E0E0",
      "grey-80": "#424242",
      "grey-40": "#BDBDBD",
      orange: "#EC5B29",
      blue: "#2031E2",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
  },
});
