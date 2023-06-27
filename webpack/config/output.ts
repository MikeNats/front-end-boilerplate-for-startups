import config from '../../config';
import { WebpackOutput } from '../../types/webpack.d';

export default (baseConfig: BaseWebpackConfig): WebpackOutput =>
  ({
    [config.env.LOCAL]: {
      filename: '[name].js',
      chunkFilename: '[id].js',
      publicPath: '/',
      path: `${baseConfig.rootPath}/${baseConfig.dist}`,
    },
    [config.env.PROD]: {
      filename: '[name].[fullhash].js',
      chunkFilename: '[id].[chunkhash].js',
      publicPath: '/',
      path: `${baseConfig.rootPath}/${baseConfig.dist}`,
    },
  }[baseConfig.mode || config.env.LOCAL]);
