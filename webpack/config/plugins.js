import HtmlWebpackPlugin from 'html-webpack-plugin';

export default (baseConfig) => {
  return [
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
};
