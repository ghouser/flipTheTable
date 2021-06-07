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
import { Box, Text, Heading } from "@chakra-ui/core";

export default function LandingPage(props) {
  const {photo, title} = props;
  return (
    <Box backgroundImage={"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+photo+")"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      w="100%"
      h="350px"
      >
      <Heading color="earth.100" textAlign="center" h="350px" lineHeight="350px" fontSize="5xl">{title.toUpperCase()}</Heading>
    </Box>
  );
}

LandingPage.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
