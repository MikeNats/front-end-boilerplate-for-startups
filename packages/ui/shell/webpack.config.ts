// tslint:disable-next-line:no-var-requires
const webpackDev = require('../../../webpack/webpack.config');
module.exports = {
  ...webpackDev,
  entry: './src/index.js',
};
