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
import { Flex } from '@chakra-ui/core';

export default function Admin(props) {
  //const { title, ...attrs } = props;
  const { title } = props;
  return (
    <Flex h="100px" bg="earth.100" align="center" justify="center">
      <Heading
        color="earth.100"
        textAlign="center"
        h="350px"
        lineHeight="350px"
        fontSize="5xl"
      >
        {title.toUpperCase()}
      </Heading>
      <Text fontFamily="sans-serif" color="blue.700">
        This page is not yet implemented.
      </Text>
    </Flex>
  );
}

Admin.propTypes = {
  title: PropTypes.string.isRequired,
};
