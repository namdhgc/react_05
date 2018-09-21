var path = require('path');
var webpack = require('webpack');

var srcPath = path.join(__dirname, 'scripts');
var buildPath = path.join(__dirname, 'dist');

 module.exports = {
    entry: [path.join(srcPath, 'containers/test.jsx')], // many entry points => build to many files 
    output: {
        path: buildPath,
        filename: 'bundle.js', // compiled file here
    },
    resolve: {
        modules: [
            'scripts', 'node_modules', // get source code, find module from these folder, sd cac dependencies khac o day
        ],
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader", // sd de load
                    options: {
                      presets: ['env', 'react'] // sd de convert ve es5 va su dung tien ich env, react
                    }
                }
            }
        ]
    }
 };