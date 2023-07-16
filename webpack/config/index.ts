import rules from './rules';
import plugins from './plugins';
import resolve from './resolve';
import devServer from './devServer';
import entry from './entry';
import output from './output';
import appWebpackConfig from './appWebpackConfig';
import { Environment, DevTools } from '../../enums';
export default (rootPath: string, env: Environment, devToolsMode?: string) => {
  const envBasedConfig = appWebpackConfig(rootPath, env);
  const webpackConfig = {
    target: envBasedConfig.target,
    mode: env === Environment.LOCAL ? Environment.DEV : Environment.PROD,
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

  console.log(JSON.stringify(webpackConfig, null, 2));

  return webpackConfig;
};
