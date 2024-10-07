import React from "react";
import { createTheme, Theme, ThemeProvider } from "@mui/material";
type ThemeProps = {
  children: JSX.Element;
};

enum ThemePallete {
  BG = "#094B81",
  PRIMARY_BUTTON = "#3178c6",
  FONT_GLOBAL = "'Archivo Black', sans-serif",
}

const theme: Theme = createTheme({
  palette: {
    mode: "light",

    background: {
      default: ThemePallete.BG,
    },
    primary: {
      main: ThemePallete.PRIMARY_BUTTON,
    },
  },
  typography: {
    fontFamily: ThemePallete.FONT_GLOBAL,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0.6rem",
        },
      },
    },
  },
});
export const ThemeConfig: React.FC<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
