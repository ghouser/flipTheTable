/**
 * Copyright © 2020-Flip the Table. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from 'components/Layout';
import DocsPage from './DocsPage';

function action(route) {
  // blog name from the route object
  const docsName = route.params.name;

  return {
    chunks: ['docsPage'],
    title: docsName,
    description: 'Viewing Document Page',
    forceReload: true,
    component: (
      <Layout>
        <h1>{docsName}</h1>
        <DocsPage docsName={`docs/${docsName}.mdx`} />
      </Layout>
    ),
  };
}

export default action;
