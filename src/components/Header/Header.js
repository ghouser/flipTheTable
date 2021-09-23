/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Flex, Heading } from '@chakra-ui/core';
import ChakraLink from 'components/ChakraLink';
import Navigation from 'components/Navigation';

export default function Header() {
  return (
    <Flex
      bg="blue.600"
      color="earth.100"
      align="center"
      justify="space-between"
      top="0"
      right="0"
      left="0"
      pos="fixed"
      h={50}
    >
      <Heading ml={2} as={ChakraLink} to="/">
        Flip the Table
      </Heading>
      <Navigation />
    </Flex>
  );
}
