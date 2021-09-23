/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Button } from '@chakra-ui/core';
import ChakraLink from '../ChakraLink';

// spacing and format for top navbar link items
const LinkItems = props => (
  <ChakraLink
    to={props.to}
    mt={{ base: 4, md: 0 }}
    mb={2}
    ml={2}
    mr={2}
    display="block"
  >
    {props.children}
  </ChakraLink>
);

// spacing and format for top navbar text items
const TextItems = props => (
  <Text mt={{ base: 4, md: 0 }} mb={2} display="block">
    {props.children}
  </Text>
);

export default function Navigation() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt={2}
    >
      <LinkItems to="/about"> About </LinkItems>
      <TextItems> | </TextItems>
      <LinkItems to="/blog"> Blog </LinkItems>
      <TextItems> or </TextItems>
      <Button
        borderColor="earth.100"
        color="earth.100"
        variant="outline"
        as={ChakraLink}
        to="/tools"
        mt={{ base: 4, md: 0 }}
        mb={2}
        ml={2}
        mr={2}
      >
        Tools
      </Button>
    </Box>
  );
}

LinkItems.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

TextItems.propTypes = {
  children: PropTypes.any.isRequired,
};
