import React from 'react';
import loadable from '@loadable/component';
import Layout from 'components/Layout';
// import Blog from './Blog';

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
        <h1>Blog Page {blogName}</h1>
        <Content />
      </Layout>
    ),
  };
}

export default action;
