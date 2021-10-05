/**
 * Copyright © 2020-Flip the Table. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Grid, Text } from '@chakra-ui/core';
import Tile from 'components/Tile';

// create simple key by combining title and date without spaces
function generateKey(title, date) {
  return title.replace(/\s/g, '') + date.replace(/\s/g, '');
}

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
