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

import Header from '../Header';
import Footer from '../Footer';

const siteName = `test ${process.env.SITE_NAME}`;

export default function Layout({ children }) {
  return (
    <>
      <Header siteName={siteName} />
      <Flex direction="column" bg="earth.100" pt={50} pb={60} h="100vh">
        {children}
      </Flex>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
