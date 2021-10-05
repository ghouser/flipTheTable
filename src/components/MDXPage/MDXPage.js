/**
 * Copyright © 2020-Flip the Table. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { ErrorBoundary } from 'react-error-boundary';
import FriendlyError from 'components/FriendlyError';

// load the mdx by file based on route name
const Content = loadable(({ fileName }) => import(`content/${fileName}`), {
  fallback: <div>Loading...</div>,
});

export default function MDXPage({ name }) {
  return (
    <ErrorBoundary FallbackComponent={FriendlyError}>
      <Content fileName={name} />
    </ErrorBoundary>
  );
}

MDXPage.propTypes = {
  name: PropTypes.string.isRequired,
};
