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
import { Flex, Text, Link } from '@chakra-ui/core';
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

const FeedbackItems = props => (
  <Link href={props.to} mt={{ base: 4, md: 0 }} ml={2} mr={2} display="block">
    {props.children}
  </Link>
);

export default function Footer() {
  return (
    <Flex
      bg="blue.600"
      color="earth.100"
      alight="center"
      justifyContent="center"
      bottom="0"
      right="0"
      left="0"
      pos="fixed"
      flexDirection="column"
      h={60}
    >
      <Flex justifyContent="center">
        <FeedbackItems to="mailto:derp@derp.com">Ask a question</FeedbackItems>
        <Text mt={{ base: 4, md: 0 }} display="block">
          |
        </Text>
        <FeedbackItems to="mailto:derp@derp.com">Report an issue</FeedbackItems>
      </Flex>
      <Flex justifyContent="center">
        <LinkItems to="/about">© Flip The Table</LinkItems>
        <TextItems>·</TextItems>
        <LinkItems to="/">Home</LinkItems>
        <TextItems>·</TextItems>
        {/* <LinkItems to="/admin">Admin</LinkItems>
        <TextItems>·</TextItems> */}
        <LinkItems to="/privacy">Privacy</LinkItems>
        <TextItems>·</TextItems>
        <LinkItems to="/not-found">Not Found</LinkItems>
      </Flex>
    </Flex>
  );
}

LinkItems.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

FeedbackItems.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

TextItems.propTypes = {
  children: PropTypes.any.isRequired,
};
