import rules from './rules';
import plugins from './plugins';
import resolve from './resolve';
import devServer from './devServer';
import entry from './entry';
import output from './output';
import baseConfig from './baseConfig';
import { DevTools } from '../enums';
import config from '../../config';

export default (rootPath: string, mode: Environment, devToolsMode?: string) => {
  const envBasedConfig = baseConfig(rootPath, mode);

  return {
    target: 'web',
    mode: mode === config.env.LOCAL ? config.env.DEV : config.env.PROD,
    entry: entry(envBasedConfig),
    output: output(envBasedConfig),
    module: {
      rules: rules(),
    },
    plugins: plugins(envBasedConfig),
    resolve: resolve(envBasedConfig),
    ...(mode === config.env.LOCAL
      ? {
          devServer: devServer(envBasedConfig),
          devtool: devToolsMode || DevTools.Slowest,
        }
      : {}),
  };
};
