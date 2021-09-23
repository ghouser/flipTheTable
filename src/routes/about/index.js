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
import Layout from 'components/Layout';
import Content from './about.mdx';

function action() {
  return {
    chunks: ['about'],
    title: 'About Me',
    component: (
      <Layout>
        <Flex direction="column" padding={10} bg="earth.100">
          <Content />
        </Flex>
      </Layout>
    ),
  };
}

export default action;
