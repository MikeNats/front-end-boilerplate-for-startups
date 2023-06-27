import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackPluginInstance } from 'webpack';

export default (baseConfig: BaseWebpackConfig): WebpackPluginInstance[] => [
  new HtmlWebpackPlugin({
    template: `${baseConfig.rootPath}/index.html`,
    hash: true,
    // favicon: `${srcDir}/static/favicon.ico`,
    filename: 'index.html',
    inject: true,
    minify: {
      collapseWhitespace: true,
    },
  }),
];
