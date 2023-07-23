import { AppWebpackConfig } from 'types/global';
import { DevServer } from '../../types/webpack.d';

module.exports = (appWebpackConfig: AppWebpackConfig): DevServer => ({
  static: `${appWebpackConfig.appPath}/${appWebpackConfig.dist}`,
  port: appWebpackConfig.port,
  host: appWebpackConfig.domain,
  server: appWebpackConfig.protocol,
  compress: true,
  liveReload: true,
  allowedHosts: 'all',
  historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers':
      'X-Requested-With, content-type, Authorization',
  },
});
