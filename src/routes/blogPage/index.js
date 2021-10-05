/**
 * Copyright © 2020-Flip the Table. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from 'components/Layout';
import BlogPage from './BlogPage';

function action(route) {
  // blog name from the route object
  const blogName = route.params.name;

  return {
    chunks: ['blogPage'],
    title: blogName,
    description: 'Viewing Blog Page',
    forceReload: true,
    component: (
      <Layout>
        <h1>Blog Page {blogName}</h1>
        <BlogPage pageName={`blogs/${blogName}.mdx`} />
      </Layout>
    ),
  };
}

export default action;
