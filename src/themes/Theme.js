import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#413bde",
      light: "#5e68e6",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          padding: "0.3rem 1rem",
          fontFamily: "Poppins",
        },
        label: {
          fontFamily: "Poppins",
        },
      },
      variants: [
        {
          props: { variant: "btn-primary" },
          style: {
            backgroundColor: "#413bde",
            border: "1px solid #413bde",
            color: "white",
            "&:hover": {
              backgroundColor: "white",
              color: "#413bde",
            },
          },
        },
        {
          props: { variant: "btn-secondary" },
          style: {
            backgroundColor: "white",
            border: "1px solid #413bde",
            color: "#413bde",
            "&:hover": {
              backgroundColor: "#413bde",
              color: "white",
            },
          },
        },
      ],
    },
  },
});
