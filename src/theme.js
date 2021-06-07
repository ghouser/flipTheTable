import { theme } from '@chakra-ui/core';
// import './fonts/Fondamento-Regular.ttf'

// add some custom colors
const customTheme = {
  ...theme,
  fonts: {
    // body: "Roboto, sans-serif",
    heading: 'Fondamento, cursive',
    // mono: "Times New Roman, Times, serif"
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  colors: {
    ...theme.colors,
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
    blue: {
      50: '#ecf1fe',
      100: '#cdd4e7',
      200: '#adb7d1',
      300: '#8e9bbe',
      400: '#6d7eab',
      500: '#333e5b',
      600: '#414e71',
      700: '#2e3852',
      800: '#1a2133',
      900: '#1a2139',
    },
    red: {
      50: '#ffe7e0',
      100: '#ffbeb2',
      200: '#fd9583',
      300: '#fa6b51',
      400: '#f74221',
      500: '#de2808',
      600: '#ae1e05',
      700: '#7c1402',
      800: '#4d0900',
      900: '#200000',
    },
    grey: {
      50: '#e9f3fe',
      100: '#d2d8e1',
      200: '#b8bdc8',
      300: '#9ca3af',
      400: '#818997',
      500: '#686f7e',
      600: '#505763',
      700: '#393e48',
      800: '#21252e',
      900: '#0b0b17',
    },
    earth: {
      50: '#f9f3e6',
      100: '#dedbcf',
      200: '#c8c3b5',
      300: '#b0ab9a',
      400: '#9a927f',
      500: '#807965',
      600: '#645e4e',
      700: '#484336',
      800: '#2c281e',
      900: '#130d00',
    },
  },
};

export default customTheme;
