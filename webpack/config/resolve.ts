import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { WebpackResolve } from '../../types/webpack.d';
import { AppWebpackConfig } from 'types/global';

export default (appWebpackConfig: AppWebpackConfig): WebpackResolve => ({
  extensions: ['.tsx', '.ts', '.js'],
  plugins: [
    new TsconfigPathsPlugin({
      configFile: `${appWebpackConfig.rootPath}/tsconfig.json`,
    }),
  ],
});
