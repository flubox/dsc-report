const plato = require('es6-plato');
const path = require('path');
const filename = path.resolve(__dirname, 'design-storage-client');
const simpleGit = require('simple-git')(path.resolve(__dirname, '/'));

const package = require(path.resolve(filename, 'package.json'));

//be sure and set your src, output, and any options. 
let src = path.resolve(filename, 'src/**/*.js');
let outputDir = path.resolve(__dirname, './docs');

let platoArgs = {
title: package.name,
    eslint: {}
};

//you can use the reports in the callback. 
function callback(reports) {
    let overview = plato.getOverviewReport(reports);
    
    let {
        total,
        average
    } = overview.summary;
    
    let output = `total
        ----------------------
        eslint: ${total.eslint}
        sloc: ${total.sloc}
        maintainability: ${total.maintainability}
        average
        ----------------------
        eslint: ${average.eslint}
        sloc: ${average.sloc}
        maintainability: ${average.maintainability}`;
    
    console.log(output);
}


//usage is plato.inspect 
plato.inspect(src, outputDir, platoArgs, callback);
