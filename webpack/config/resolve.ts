import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { WebpackResolve } from '../../types/webpack.d';
import { AppWebpackConfig } from 'types/global';

export default (appWebpackConfig: AppWebpackConfig): WebpackResolve => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      config: `${appWebpackConfig.rootPath}/config/index.ts`,
    },
    plugins: [
      new TsconfigPathsPlugin({
        configFile: `${appWebpackConfig.rootPath}/tsconfig.json`,
      }),
    ],
  };
};
