import { ENV } from '../enums';

export default (baseConfig) =>
  ({
    [ENV.DEV]: {
      filename: '[name].js',
      chunkFilename: '[id].js',
      publicPath: '/',
      path: `${baseConfig.rootPath}/${baseConfig.dist}`,
    },
    [ENV.PROD]: {
      filename: '[name].[fullhash].js',
      chunkFilename: '[id].[chunkhash].js',
      publicPath: '/',
      path: `${baseConfig.rootPath}/${baseConfig.dist}`,
    },
  }[baseConfig.mode || ENV.DEV]);
