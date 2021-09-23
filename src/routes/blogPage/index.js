import React from 'react';
import loadable from '@loadable/component';
import Layout from 'components/Layout';
import { ErrorBoundary } from 'react-error-boundary';
import FriendlyError from 'components/FriendlyError';

const title = 'Blog Page';

function action(route) {
  // blog name from the route object
  const blogName = route.params.name;

  // load the mdx by file based on route name
  const Content = loadable(() => import(`content/blogs/${blogName}.mdx`), {
    fallback: <div>Loading...</div>,
  });

  return {
    chunks: ['blogPage'],
    title,
    component: (
      <Layout>
        <ErrorBoundary FallbackComponent={FriendlyError}>
          <h1>Blog Page {blogName}</h1>
          <Content />
        </ErrorBoundary>
      </Layout>
    ),
  };
}

export default action;
