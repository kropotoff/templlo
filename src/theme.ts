import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#270a02', // deep brown for text/icons
    },
    secondary: {
      main: '#D4C6B8', // sand beige
    },
    background: {
      default: '#E6DCD2', // light sand
      paper: '#3B2314',
      // 'appBar' is not a valid property for MUI background, so it has been removed.
    },
    text: {
      primary: '#270a02', // deep brown for main text
      secondary: '#7B6B5B',
    },
  },
  typography: {
    fontFamily: "'Playfair Display', 'Crimson Text', 'Georgia', serif",
    h1: {
      fontFamily: "'Playfair Display', 'Crimson Text', serif",
      fontWeight: 800,
      fontSize: '4.5rem',
      letterSpacing: '-0.8px',
      textTransform: 'none',
      textShadow: '0 2px 4px rgba(39, 10, 2, 0.1)',
    },
    h2: {
      fontFamily: "'Playfair Display', 'Crimson Text', serif",
      fontWeight: 700,
      fontSize: '3.2rem',
      letterSpacing: '-0.6px',
      textTransform: 'none',
      textShadow: '0 1px 3px rgba(39, 10, 2, 0.1)',
    },
    h3: {
      fontFamily: "'Playfair Display', 'Crimson Text', serif",
      fontWeight: 600,
      fontSize: '2.4rem',
      letterSpacing: '-0.3px',
      textTransform: 'none',
      textShadow: '0 1px 2px rgba(39, 10, 2, 0.1)',
    },
    h4: {
      fontFamily: "'Playfair Display', 'Crimson Text', serif",
      fontWeight: 600,
      fontSize: '1.8rem',
      letterSpacing: '-0.2px',
      textTransform: 'none',
    },
    h5: {
      fontFamily: "'Playfair Display', 'Crimson Text', serif",
      fontWeight: 600,
      fontSize: '1.4rem',
      letterSpacing: '0.2px',
    },
    h6: {
      fontFamily: "'Playfair Display', 'Crimson Text', serif",
      fontWeight: 600,
      fontSize: '1.2rem',
      letterSpacing: '0.3px',
    },
    body1: {
      fontFamily: "'Crimson Text', 'Georgia', serif",
      fontWeight: 500,
      fontSize: '1.3rem',
      lineHeight: 1.8,
      letterSpacing: '0.02em',
    },
    body2: {
      fontFamily: "'Crimson Text', 'Georgia', serif",
      fontWeight: 500,
      fontSize: '1.15rem',
      lineHeight: 1.7,
      letterSpacing: '0.02em',
    },
    button: {
      fontFamily: "'Playfair Display', 'Crimson Text', serif",
      textTransform: 'none',
      fontWeight: 700,
      letterSpacing: 1.2,
      fontSize: '1.1rem',
    },
  },
});
