import { WebpackEntry } from '../../types/webpack.d';
import { Environment } from '../../enums';
import { AppWebpackConfig } from 'types/global';

export default (appWebpackConfig: AppWebpackConfig): WebpackEntry => {
  const { protocol, domain, port, env, appPath } = appWebpackConfig;
  return {
    [Environment.LOCAL as Environment]: {
      app: [
        `webpack-dev-server/client?${protocol}://${domain}:${port}`,
        'webpack/hot/only-dev-server',
        `${appPath}/src/index.tsx`,
      ],
    },
    [Environment.PROD as Environment]: {
      app: [`${appPath}/src/index.tsx`],
    },
  }[env || Environment.LOCAL];
};
