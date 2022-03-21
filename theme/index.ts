import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import Button from "./components/Button";

const theme: ThemeOverride = {
  styles: {
    global: (props) => {
      return {
        body: {
          bg: mode("brand.white", "brand.black")(props),
        },
      };
    },
  },
  colors: {
    brand: {
      "blue-5": "#E9EAFC",
      "blue-10": "#DCDEFA",
      "blue-20": "#C9CDF9",
      "blue-25": "#B0B5F5",
      "blue-40": "#3241E8",
      "blue-50": "#2D3BD4",
      "blue-70": "#3735EC",
      "blue-90": "#0029DD",
      secondaryHover: "#424242",
      error: "#DA1E28",
      success: "#1A8038",
      black: "#000000",
      white: "#FFFFFF",
      secondaryTextColor: "#fff",
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
  fonts: {
    body: "Satoshi-Variable, Roboto",
    heading: "Satoshi-Variable, Roboto",
  },
  components: {
    Button,
  },
};

// Adding a comment so a new deployment gets triggered :)
const extendedTheme = extendTheme(theme);

export default extendedTheme;
