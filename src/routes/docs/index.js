import Layout from 'components/Layout';
import React from 'react';
import Docs from './Docs';

function action() {
  return {
    chunks: ['docs'],
    title: 'documents',
    component: (
      <Layout>
        <Docs />
      </Layout>
    ),
  };
}

export default action;
