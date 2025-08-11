import { DefaultTheme } from "styled-components";
import { colors } from "./tokens";

export const lightTheme: DefaultTheme = {
    colors: {
         bgGlobal: {
                levelOne: colors.neutral[200]
            },

        text: {
            primary: colors.neutral[900],
        },
    },

};

export const darkTheme: DefaultTheme = {
    ...lightTheme,
    colors: {
        bgGlobal: {
                levelOne: colors.neutral[1000]
            },
        text: {
            primary: colors.neutral[0],
        },
    },
};