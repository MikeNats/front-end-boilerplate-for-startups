import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import { WebpackResolve } from '../../types/webpack.d';

export default (baseConfig: BaseWebpackConfig): WebpackResolve => ({
  extensions: ['.tsx', '.ts', '.js'],
  plugins: [
    new TsconfigPathsPlugin({
      configFile: `${baseConfig.rootPath}/tsconfig.json`,
    }),
  ],
});
