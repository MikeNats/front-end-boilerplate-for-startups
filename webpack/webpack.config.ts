// webpack.config.js
require = require('esm')(module); // Enables ES6 import/export in Node.js scripts
module.exports = require('./webpack.babel.ts'); // Path to your actual webpack config
