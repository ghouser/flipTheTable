/**
 * Copyright © 2020-Flip the Table. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from 'components/Layout';
import LandingPage from 'components/LandingPage';
import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';
import Blog from './Blog';
import photo from './Blog_Banner.png';

const title = 'Blog';

// query a full list of blogs
async function getAllBlogs({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{blogList{title,fileName,imageLink,authors,pubDate,desc}}',
    }),
  });
  const { data } = await resp.json();
  return data;
}

// TO DO a query that gets blogs by category

async function action({ fetch }) {
  const allBlogs = await getAllBlogs({ fetch });
  if (!allBlogs.blogList) throw new Error('Failed to load the list of blogs.');
  return {
    chunks: ['blog'],
    title,
    component: (
      <Layout>
        <Flex direction="column" bg="earth.100">
          <LandingPage title={title} photo={photo} />
          <Tabs
            align="center"
            variant="soft-rounded"
            variantColor="blue"
            p="5px"
          >
            <TabList>
              <Tab>Recent</Tab>
              <Tab>Categories</Tab>
            </TabList>
            <TabPanels mb={60}>
              <TabPanel>
                <Blog blogList={allBlogs.blogList} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Layout>
    ),
  };
}

export default action;
