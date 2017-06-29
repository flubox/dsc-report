const plato = require('es6-plato');
const rimraf = require('rimraf');
const path = require('path');
const fs = require('fs');
const filename = path.resolve(__dirname, 'design-storage-client');
const newFilename = `${filename}.old`;

fs.rename(filename, newFilename, () => {
    rimraf(newFilename, () => {
        console.info(`OK: ${newFilename} removed`);
    });
})

