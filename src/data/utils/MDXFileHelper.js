import { readDir } from '../../../tools/lib/fs';

// lists MDX files in a path
async function checkDir(dirName) {
  const result = await readDir(dirName);
  return result;
}

// returns a promise containing a list of mdx files in the requested directory
function listMDX(dirName) {
  const results = [];
  const dirFiles = checkDir(dirName);
  return dirFiles.then(files => {
    files.forEach(file => {
      results.push(file.replace('src/content/', ''));
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
