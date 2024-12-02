function createFrame(names: string[]): string {
  const FIGURE = '*';
  const SPACE = ' ';
  const MARGIN = 4;
  const maxLenName = names.toSorted((a: string, b: string) => b.length - a.length)[0].length;
  const magicalFrameBorder = FIGURE.repeat(maxLenName + MARGIN);
  let wrapper = '';
  let frameNames = names.map(name => {
    const nameLen = name.length;
    const padding = Math.abs(maxLenName - nameLen);
    const packageName = `${FIGURE}${SPACE}${name}${SPACE.repeat(padding)}${SPACE}${FIGURE}`;
    return `\n${packageName}`;
  });

  wrapper = `${magicalFrameBorder}`;
  wrapper += `${frameNames.join('')}`;
  wrapper += `\n${magicalFrameBorder}`;
  return wrapper;
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']));

// Expected result:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(['midu']));

// Expected result:
// ********
// * midu *
// ********

console.log(createFrame(['midu', 'madeval', 'educalvolpz', 'midu']));
