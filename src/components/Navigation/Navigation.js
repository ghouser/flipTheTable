/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Box, Text, Button } from '@chakra-ui/core';
import ChakraLink from '../ChakraLink';

// spacing and format for top navbar link items
const LinkItems = ({ children }) => (
  <ChakraLink
    to={`/${children.toLowerCase().replace(/\s/g, '')}`}
    mt={{ base: 4, md: 0 }}
    mb={2}
    ml={2}
    mr={2}
    display="block"
  >
    {children}
  </ChakraLink>
);

// spacing and format for top navbar text items
const TextItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mb={2} display="block">
    {children}
  </Text>
);

export default function Navigation() {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <LinkItems> About </LinkItems>
      <LinkItems> Contact </LinkItems>
      <TextItems> | </TextItems>
      <LinkItems> Log in </LinkItems>
      <TextItems> or </TextItems>
      <Button
        borderColor="earth.100"
        color="earth.100"
        variant="outline"
        as={ChakraLink}
        to="/register"
        mt={{ base: 4, md: 0 }}
        mb={2}
        ml={2}
        mr={2}
      >
        Sign up
      </Button>
    </Box>
  );
}
