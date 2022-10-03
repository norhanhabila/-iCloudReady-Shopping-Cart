import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5ECE7B",
    },
    secondary: {
      main: "#FFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "white",
          height: 90,
        },
      },
    },
  },
});
