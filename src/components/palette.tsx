import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { AppBar } from '@mui/material';
import Button from '@mui/material/Button';

const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        light: '#cce5ff',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  
  type PaletteProps = {
    children: React.ReactNode; // 👈️ type children
  };
export default function Palette(props: PaletteProps) {
  
  return (
    <ThemeProvider theme={theme}>
      <div style={{ color: "primary.light"}}>{props.children}</div>
    </ThemeProvider>
  );
}