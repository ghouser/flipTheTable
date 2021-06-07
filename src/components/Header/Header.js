/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import ReactLink from '../Link';
import Navigation from '../Navigation';
import { Flex, Heading } from "@chakra-ui/core";

export default function Header() {
  return (
    <Flex bg="blue.600" color="earth.100" align="center" justify="space-between">
        <Heading as={ReactLink} to="/">
          Flip the Table
        </Heading>
        <Navigation />
    </Flex>
  );
}
