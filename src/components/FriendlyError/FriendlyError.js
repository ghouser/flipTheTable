/**
 * Copyright © 2020-Flip the Table. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Flex, Text } from '@chakra-ui/core';

export default function FriendlyError() {
  return (
    <Flex>
      <Text fontSize="6xl">404 Cannot Load Page :(</Text>
    </Flex>
  );
}
