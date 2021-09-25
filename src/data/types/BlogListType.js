/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLList as List,
} from 'graphql';

const BlogListType = new ObjectType({
  name: 'BlogItem',
  fields: {
    title: { type: new NonNull(StringType) },
    fileName: { type: new NonNull(StringType) },
    imageLink: { type: StringType },
    authors: { type: new List(StringType) },
    pubDate: { type: new NonNull(StringType) },
    desc: { type: new NonNull(StringType) },
  },
});

export default BlogListType;
