'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#31473a',
      contrastText: '#edf4f2',
    },
    secondary: {
      main: '#524949',
    },
    text: {
      secondary: 'rgba(0,0,0,0.38)',
      primary: 'rgba(0,0,0,0.75)',
      disabled: 'rgba(0,0,0,0.19)',
    },
    info: {
      main: '#31473a',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
