import React from 'react';
import PropTypes from 'prop-types';
import {
  theme,
  Box,
  Flex,
  Text,
  Heading,
  Grid,
  SimpleGrid,
  Stack,
  Link,
  Image,
} from '@chakra-ui/core';
// import './fonts/Fondamento-Regular.ttf'

// add some custom colors
const CustomTheme = {
  ...theme,
  fonts: {
    heading: 'Fondamento, cursive',
    body: 'Roboto, sans-serif',
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

const MDXComponents = {
  h1: props => (
    <Text as="h1" fontSize="6xl" {...props}>
      {props.children}
    </Text>
  ),
  h2: props => (
    <Text as="h2" fontSize="5xl" {...props}>
      {props.children}
    </Text>
  ),
  h3: props => (
    <Text as="h3" fontSize="4xl" {...props}>
      {props.children}
    </Text>
  ),
  h4: props => (
    <Text as="h4" fontSize="3xl" {...props}>
      {props.children}
    </Text>
  ),
  h5: props => (
    <Text as="h5" fontSize="2xl" {...props}>
      {props.children}
    </Text>
  ),
  h6: props => (
    <Text as="h6" fontSize="xl" {...props}>
      {props.children}
    </Text>
  ),
  p: props => (
    <Text mb="1rem" {...props}>
      {props.children}
    </Text>
  ),
  Text,
  Box,
  Flex,
  Heading,
  Grid: props => <Grid {...props}>{props.children}</Grid>,
  Link,
  Image,
  SimpleGrid,
  Stack,
};

export { CustomTheme, MDXComponents };

MDXComponents.h1.propTypes = {
  children: PropTypes.any.isRequired,
};
MDXComponents.h2.propTypes = {
  children: PropTypes.any.isRequired,
};
MDXComponents.h3.propTypes = {
  children: PropTypes.any.isRequired,
};
MDXComponents.h4.propTypes = {
  children: PropTypes.any.isRequired,
};
MDXComponents.h5.propTypes = {
  children: PropTypes.any.isRequired,
};
MDXComponents.h6.propTypes = {
  children: PropTypes.any.isRequired,
};
MDXComponents.p.propTypes = {
  children: PropTypes.any.isRequired,
};
MDXComponents.Grid.propTypes = {
  children: PropTypes.any.isRequired,
};
