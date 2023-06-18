import { ENV } from '../enums';

export default (baseConfig) =>
  ({
    [ENV.DEV]: {
      app: [
        `webpack-dev-server/client?${baseConfig.protocol}://${baseConfig.host}:${baseConfig.port}`,
        'webpack/hot/only-dev-server',
        `./src/index.tsx`,
      ],
    },
    [ENV.PROD]: {
      app: [`./src/index.tsx`],
    },
  }[baseConfig.mode || ENV.DEV]);
