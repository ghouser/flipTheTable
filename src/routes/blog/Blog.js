/**
 * Copyright © 2020-Flip the Table. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Grid, Text, Divider } from '@chakra-ui/core';
import ChakraLink from 'components/ChakraLink';

// create simple key by combining title and date without spaces
function generateKey(title, date) {
  return title.replace(/\s/g, '') + date.replace(/\s/g, '');
}

// single Tile for the blog
const Tile = ({ tileId, content }) => (
  <Flex
    display="block"
    h="214px"
    w="414px"
    p="7px"
    backgroundColor="blue.100"
    rounded="lg"
    id={tileId}
    as={ChakraLink}
    to={`blog/${content.fileName}`}
  >
    <Flex w="100%" h="100%" justifyContent="space-between" alignItems="center">
      <Flex
        w="45%"
        h="90%"
        rounded="lg"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundImage={`url(/${content.imageLink})`}
      />
      <Flex direction="column" w="50%" h="90%" overflow="hidden">
        <Text fontFamily="sans-serif" color="blue.700" fontWeight="600">
          {content.title}
        </Text>
        <Divider borderColor="red.600" />
        <Text fontFamily="sans-serif" color="blue.700">
          {content.desc}
        </Text>
      </Flex>
    </Flex>
  </Flex>
);

export default function Blog({ blogList }) {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={5}
      justifyItems="center"
      p="5px"
    >
      {blogList.map((content, index) => (
        <Flex
          direction="column"
          key={generateKey(content.title, content.pubDate)}
        >
          <Tile tileId={index} content={content} />
          <Text fontFamily="sans-serif" color="blue.700">
            {content.authors} - {content.pubDate}
          </Text>
        </Flex>
      ))}
    </Grid>
  );
}

Blog.propTypes = {
  blogList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      fileName: PropTypes.string.isRequired,
      imageLink: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      pubDate: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Tile.propTypes = {
  tileId: PropTypes.number.isRequired,
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    imageLink: PropTypes.string,
  }).isRequired,
};
