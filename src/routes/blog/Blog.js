/**
 * Copyright © 2020-Flip the Table. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Flex,
  Grid,
  Image,
  Text,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/core';
import LandingPage from 'components/LandingPage';
import photo from './Blog_Banner.png';
import palet from './palet.jpg';
import cards from './cards.jpg';
import dice from './dice.jpg';

// eventually this will get the blog data, for now place holder
const getBlogPreview = () => {
  // dummy obj 1
  const title1 = 'Sundroping Miniatures';
  const desc1 =
    "Don't have time to paint a whole army? Let's take a look at the sundrop technique!";
  const thumbnail1 = palet;
  const blogPrev1 = {
    title: title1,
    desc: desc1,
    thumbnail: thumbnail1,
    date: '7/24/2020',
    author: 'Graham Houser',
  };
  // dummy obj 2
  const title2 = "Dealin' With Dice";
  const desc2 = 'Stop depending on RNG, and learn the basics of probability.';
  const thumbnail2 = dice;
  const blogPrev2 = {
    title: title2,
    desc: desc2,
    thumbnail: thumbnail2,
    date: '7/24/2020',
    author: 'Graham Houser',
  };
  // dummy obj 3
  const title3 = 'Fundamentals of Deckbuilding';
  const desc3 =
    "From Dominion to Aeon's End, let's discuss winning strategies common to most deckbuilding games.";
  const thumbnail3 = cards;
  const blogPrev3 = {
    title: title3,
    desc: desc3,
    thumbnail: thumbnail3,
    date: '7/24/2020',
    author: 'Graham Houser',
  };

  return [blogPrev1, blogPrev2, blogPrev3];
};

// dummy variable, will be an array of blog info
const blog = getBlogPreview();

// single Tile for the blog
const Tile = props => (
  <Flex
    display="block"
    h="214px"
    w="414px"
    p="7px"
    backgroundColor="blue.100"
    rounded="lg"
    id={props.key}
  >
    <Flex w="100%" h="100%" justifyContent="space-between" alignItems="center">
      <Flex
        w="45%"
        h="90%"
        rounded="lg"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundImage={`url(${props.content.thumbnail})`}
      />
      <Flex direction="column" w="50%" h="90%" overflow="hidden">
        <Text fontFamily="sans-serif" color="blue.700" fontWeight="600">
          {props.content.title}
        </Text>
        <Divider borderColor="red.600" />
        <Text fontFamily="sans-serif" color="blue.700">
          {props.content.desc}
        </Text>
      </Flex>
    </Flex>
  </Flex>
);

export default function Blog(props) {
  // spread title to a variable, the rest to attrs
  const { title, ...attrs } = props;
  return (
    <Flex direction="column" bg="earth.100">
      <LandingPage title={title} photo={photo} />
      <Tabs align="center" variant="soft-rounded" variantColor="blue" p="5px">
        <TabList>
          <Tab>Recent</Tab>
          <Tab>Categories</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={5}
              justifyItems="center"
              p="5px"
            >
              {blog.map((content, index) => (
                <Flex direction="column">
                  <Tile key={index} content={content} />
                  <Text fontFamily="sans-serif" color="blue.700">
                    {content.author} - {content.date}
                  </Text>
                </Flex>
              ))}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

Blog.propTypes = {
  title: PropTypes.string.isRequired,
};
