import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackPluginInstance, container } from 'webpack';
// const deps = require('../../package.json').dependencies;
import { AppWebpackConfig } from '../../types/global.d';
const { ModuleFederationPlugin } = container;

module.exports = (
  appWebpackConfig: AppWebpackConfig,
): WebpackPluginInstance[] => {
  const { exposes, remotes, appName, appPath } = appWebpackConfig;
  return [
    new HtmlWebpackPlugin({
      template: `${appPath}/index.html`,
      hash: true,
      inject: true,
      favicon: `${appPath}/src/view/static/favicon.ico`,
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new ModuleFederationPlugin({
      name: appName,
      filename: 'remoteEntry.js',
      remotes,
      exposes,
      shared: [
        // {
        //   // ...deps,
        //   react: {
        //     singleton: true,
        //     requiredVersion: deps.react,
        //     eager: true,
        //   },
        //   'react-dom': {
        //     singleton: true,
        //     requiredVersion: deps['react-dom'],
        //     eager: true,
        //   },
        // },
      ],
    }),
  ];
};
