/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Flex, Text } from '@chakra-ui/core';
import ChakraLink from '../ChakraLink';

// spacing and format for bottom of page link items
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

// spacing and format for bottom of page text items
const TextItems = props => (
  <Text mt={{ base: 4, md: 0 }} mb={2} display="block">
    {props.children}
  </Text>
);

export default function Footer() {
  return (
    <Flex
      bg="blue.600"
      color="earth.100"
      alight="center"
      justifyContent="center"
    >
      <LinkItems to="/about">© Flip the Table</LinkItems>
      <TextItems>·</TextItems>
      <LinkItems to="/">Home</LinkItems>
      <TextItems>·</TextItems>
      <LinkItems to="/admin">Admin</LinkItems>
      <TextItems>·</TextItems>
      <LinkItems to="/privacy">Privacy</LinkItems>
      <TextItems>·</TextItems>
      <LinkItems to="/not-found">Not Found</LinkItems>
    </Flex>
  );
}
