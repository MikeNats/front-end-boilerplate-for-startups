// tslint:disable-next-line:no-var-requires
const webpackDev = require('../../../webpack/webpack.config');
module.exports = {
  ...webpackDev,
  entry: './src/index.js',
};
// // // tslint:disable-next-line:no-var-requires
// // const sharedConfig = require('../../../webpack/webpack.config');

// // module.exports = {
// //   ...sharedConfig,
// //   entry: './src/index.js',
// // };
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ModuleFederationPlugin =
//   require('webpack').container.ModuleFederationPlugin;
// const path = require('path');
// const deps = require('../../../package.json').dependencies;
// module.exports = {
//   entry: './src/index',
//   mode: 'development',
//   devServer: {
//     static: path.join(__dirname, 'dist'),
//     port: 5000,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
//       'Access-Control-Allow-Headers':
//         'X-Requested-With, content-type, Authorization',
//     },
//   },
//   resolve: {
//     extensions: ['.ts', '.tsx', '.js', '.mjs', '.jsx', '.css'],
//     alias: {
//       events: 'events',
//     },
//   },
//   output: {
//     publicPath: 'auto',
//     chunkFilename: '[id].[contenthash].js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: [
//           {
//             loader: 'ts-loader',
//             options: {
//               transpileOnly: true,
//             },
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: 'shell',
//       filename: 'remoteEntry.js',
//       remotes: {
//         home: 'home@http://localhost:5001/remoteEntry.js',
//       },
//       shared: [
//         {
//           react: {
//             singleton: true,
//             requiredVersion: deps.react,
//             eager: true,
//           },
//           'react-dom': {
//             singleton: true,
//             requiredVersion: deps['react-dom'],
//             eager: true,
//           },
//         },
//       ],
//     }),
//     new HtmlWebpackPlugin({
//       template: './index.html',
//     }),
//   ],
// };
