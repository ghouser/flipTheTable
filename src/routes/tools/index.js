import React from 'react';
import { Flex } from '@chakra-ui/core';
import Layout from 'components/Layout';
import Content from './filler.mdx';

const title = 'Tools';

function action() {
  return {
    title,
    chunks: ['tools'],
    component: (
      <Layout>
        <Flex ml={10} flexDirection="column">
          <Content />
        </Flex>
      </Layout>
    ),
  };
}

export default action;
