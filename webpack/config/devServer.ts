import { DevServer } from '../../types/webpack.d';

export default (baseConfig: BaseWebpackConfig): DevServer => ({
  static: `${baseConfig.rootPath}/${baseConfig.dist}`,
  port: baseConfig.port,
  host: baseConfig.domain,
  server: baseConfig.protocol,
  compress: true,
  liveReload: true,
});
