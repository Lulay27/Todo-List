const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]',     // makes names when bundled in dist
        clean: true,                            // removes excess bundles in dist
    },
};