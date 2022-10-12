import * as React from "react"

import { createTheme, ThemeProvider } from "@mui/material/styles"

import Button from "@mui/material/Button"

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",

      main: "#3f50b5",

      dark: "#002884",

      contrastText: "#fff",
    },

    secondary: {
      light: "#ff7961",

      main: "#f44336",

      dark: "#ba000d",

      contrastText: "#000",
    },
  },
})

export default function Palette() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Primary</Button>

      <Button color="secondary">Secondary</Button>
    </ThemeProvider>
  )
}
