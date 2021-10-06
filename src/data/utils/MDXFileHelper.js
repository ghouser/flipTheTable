import { readFile } from '../../../tools/lib/fs';

// when running locally, manifest is in the build folder
const debugPath = './build/asset-manifest.json';
const releasePath = './asset-manifest.json';

// returns a promise containing a list of mdx files in the requested directory
// expected input is `blogs` or `docs`
async function listMDX(dirName) {
  const docs = /docs.*/;
  const blogs = /blogs.*/;
  const results = [];

  return readFile(__DEV__ ? debugPath : releasePath).then(rawdata => {
    const chunks = Object.keys(JSON.parse(rawdata)).filter(names => {
      if (dirName === 'docs') return names.match(docs);
      if (dirName === 'blogs') return names.match(blogs);
      return [];
    });
    chunks.forEach(file => {
      results.push(file.replace('.js', '.mdx'));
    });
    return results;
  });
}

// returns a promise of the an imported mdx file by path name
async function getMDX(name) {
  const mdxFile = await import(`content/${name}`);
  return mdxFile;
}

export { listMDX, getMDX };
