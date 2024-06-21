import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";


export const theme = extendTheme({
  colors: {
    brand: {
      100: "#12b76a",
 
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "#2b3447",
      },
    }),
  },
  components: {
    Button
  }
})

