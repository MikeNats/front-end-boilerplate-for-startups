const rules = require('./rules');
const plugins = require('./plugins');
const resolve = require('./resolve');
const devServer = require('./devServer');
const entry = require('./entry');
const output = require('./output');
const appWebpackConfig = require('./appWebpackConfig');
const { Environment, DevTools } = require('../../enums');

module.exports = (
  rootPath: string,
  env: typeof Environment,
  devToolsMode?: string,
) => {
  const envBasedConfig = appWebpackConfig(rootPath, env);
  const webpackConfig = {
    target: envBasedConfig.target,
    mode: env === Environment.PROD ? Environment.PROD : Environment.DEV,
    entry: entry(envBasedConfig),
    output: output(envBasedConfig),
    module: {
      rules: rules(),
    },
    plugins: plugins(envBasedConfig),
    resolve: resolve(envBasedConfig),
    ...(env === Environment.LOCAL
      ? {
          devServer: devServer(envBasedConfig),
          devtool: devToolsMode || DevTools.Slowest,
        }
      : {}),
  };

  // console.log(JSON.stringify(webpackConfig, null, 2));
  return webpackConfig;
};
