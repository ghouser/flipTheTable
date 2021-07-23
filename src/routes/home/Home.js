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
import LandingPage from 'components/LandingPage';
import photo from 'content/Blog_Banner.png';
import Content from 'content/filler.mdx';

export default function Home(props) {
  // const { title, ...attrs } = props;
  const { title } = props;
  return (
    <Flex direction="column" bg="earth.100">
      <LandingPage title={title} photo={photo} />
      <Content />
    </Flex>
  );
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
};
