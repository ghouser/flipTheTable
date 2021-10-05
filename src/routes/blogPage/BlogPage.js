/**
 * Copyright © 2020-Flip the Table. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import MDXPage from 'components/MDXPage';

export default function BlogPage({ pageName }) {
  return <MDXPage name={pageName} />;
}

BlogPage.propTypes = {
  pageName: PropTypes.string.isRequired,
};
