import { WebpackEntry } from '../../types/webpack.d';
const { Environment } = require('../../enums');
import { AppWebpackConfig } from 'types/global';

module.exports = (appWebpackConfig: AppWebpackConfig): WebpackEntry => {
  const { protocol, domain, port, env, appPath } = appWebpackConfig;
  return {
    [Environment.LOCAL as keyof typeof Environment]: {
      app: [
        `webpack-dev-server/client?${protocol}://${domain}:${port}`,
        'webpack/hot/only-dev-server',
        `${appPath}/src/index.tsx`,
      ],
    },
    [Environment.PROD as keyof typeof Environment]: {
      app: [`${appPath}/src/index.tsx`],
    },
  }[env || Environment.LOCAL];
};
