/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Heading } from '@chakra-ui/core';
// import s from './Page.css';

export default function Page({ title, html }) {
  //  useStyles(s);
  return (
    <Flex bg="earth.100" align="center" justify="center">
      <Flex>
        <Heading
          color="earth.100"
          textAlign="center"
          h="350px"
          lineHeight="350px"
          fontSize="5xl"
        >
          {title.toUpperCase()}
        </Heading>
      </Flex>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Flex>
  );
  /*
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
  */
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};
