import config from '../../config';
import { WebpackEntry } from '../../types/webpack.d';

export default (baseConfig: BaseWebpackConfig): WebpackEntry =>
  ({
    [config.env.LOCAL]: {
      app: [
        `webpack-dev-server/client?${baseConfig.protocol}://${baseConfig.domain}:${baseConfig.port}`,
        'webpack/hot/only-dev-server',
        `./src/view/index.tsx`,
      ],
    },
    [config.env.PROD]: {
      app: [`./src/view/index.tsx`],
    },
  }[baseConfig.mode || config.env.LOCAL]);
