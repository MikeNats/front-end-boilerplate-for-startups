// tslint:disable-next-line:no-var-requires
const webpackDev1 = require('../../../webpack/webpack.config');

module.exports = {
  ...webpackDev1,
  entry: './src/index.js',
};
