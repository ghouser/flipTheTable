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
import history from '../../history';
import { Link } from "@chakra-ui/core";

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function handleClick(props, event) {
  if (props.onClick) {
    props.onClick(event);
  }

  if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
    return;
  }

  if (event.defaultPrevented === true) {
    return;
  }

  event.preventDefault();
  history.push(props.to);
}

export default function ChakraLink(props) {
  const { to, children, ...attrs } = props;

  return (
    <Link href={to} {...attrs} onClick={e => handleClick(props, e)}>
      {children}
    </Link>
  );
}

ChakraLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

ChakraLink.defaultProps = {
  onClick: null,
};
