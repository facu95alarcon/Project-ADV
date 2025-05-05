// src/theme.ts
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          body: '#121212', // preto quase absoluto
          surface: '#1e1e1e', // para containers e cards
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#b0b0b0',
        },
        primary: {
            solidBg: '#D4AF37',        // dourado mais elegante
            solidHoverBg: '#BFA828',   // tom mais escuro para hover
            plainColor: '#D4AF37',
        },
        neutral: {
          solidBg: '#2c2c2c',
          solidHoverBg: '#3a3a3a',
          plainColor: '#aaaaaa',
        },
      },
    },
  },
  fontFamily: {
    body: 'Roboto, sans-serif',
    display: 'Playfair Display, serif', // opcional para títulos mais elegantes
  },
  radius: {
    sm: '6px',
    md: '10px',
    lg: '16px',
  },
});

export default theme;
