import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

export const theme = extendTheme({
    components: { Button: { baseStyle: { _focus: { boxShadow: "none" } } } },
    styles: {
        global: {
            "html, body": {
                fontFamily: "'Metropolis', sans-serif",
                color: "gray.100",
                bg: "white",
            },
        },
    },
    colors
});
