// webpack.config.js
require = require('esm')(module); // Enables ES6 import/export in Node.js scripts
if (process.env.WEBPACK_SERVE) {
  module.exports = require('./webpack.dev.babel.ts'); // Path to your actual webpack config
} else {
  module.exports = require('./webpack.higherEnv.babel.ts'); // Path to your actual webpack config
}
