/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from 'components/Layout';
import Blog from './Blog';

const title = 'Blog';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{blogList{title,imageLink,authors,pubDate,desc}}',
    }),
  });
  const { data } = await resp.json();
  if (!data.blogList) throw new Error('Failed to load the list of blogs.');
  return {
    chunks: ['blog'],
    title,
    component: (
      <Layout>
        <Blog title={title} blogList={data.blogList} />
      </Layout>
    ),
  };
}

export default action;
