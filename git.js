const path = require('path');
const filename = path.resolve(__dirname, 'design-storage-client');
const gitPath = 'https://github.com/photobox/design-storage-client.git';
const simpleGit = require('simple-git')(path.resolve(__dirname, '/'));

simpleGit.clone(gitPath, filename, [], () => {
    console.info(`OK: cloned into ${filename}, will launch plato`);
});