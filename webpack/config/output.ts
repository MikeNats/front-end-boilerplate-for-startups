import { AppWebpackConfig } from 'types/global';
import { Environment } from '../../enums';
import { WebpackOutput } from '../../types/webpack.d';

export default (appWebpackConfig: AppWebpackConfig): WebpackOutput => {
  return {
    [Environment.LOCAL as Environment]: {
      filename: '[name].js',
      chunkFilename: '[id].js',
      publicPath: 'auto',
      path: `${appWebpackConfig.appPath}/${appWebpackConfig.dist}`,
    },
    [Environment.PROD as Environment]: {
      filename: '[name].[fullhash].js',
      chunkFilename: '[id].[chunkhash].js',
      publicPath: 'auto',
      path: `${appWebpackConfig.appPath}/${appWebpackConfig.dist}`,
    },
  }[appWebpackConfig.env || Environment.LOCAL];
};
