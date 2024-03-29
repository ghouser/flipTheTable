/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Flex } from '@chakra-ui/core';
import Content from './filler.mdx';

export default function Home() {
  return (
    <Flex ml={10} flexDirection="column">
      <Content />
    </Flex>
  );
}
