/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Box, Text, Link } from "@chakra-ui/core";

// spacing and format for feedback banner link items
const LinkItems = (props) => (
  <Link href={props.to} mt={{ base: 4, md: 0 }} ml={2} mr={2} display="block">
    {props.children}
  </Link>
);

// To Do: Make the mailto links work and have real emails
export default function Feedback() {
  return (
    <Box bg="blue.600" color="earth.100" display="flex" justifyContent="center">
      <LinkItems to="mailto:derp@derp.com">
        Ask a question
      </LinkItems>
      <Text mt={{ base: 4, md: 0 }} display="block">
        |
      </Text>
      <LinkItems to="mailto:derp@derp.com">
      Report an issue
      </LinkItems>
    </Box>
  );
}
