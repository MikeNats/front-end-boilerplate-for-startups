import rules from './rules';
import plugins from './plugins';
import resolve from './resolve';
import devServer from './devServer';
import entry from './entry';
import output from './output';
import baseConfig from './baseConfig';
import { DEV_TOOLS, ENV } from '../enums';
export default (rootPath, mode, devToolsMode) => {
  const envBasedConfig = baseConfig(rootPath, mode);

  return {
    target: 'web',
    mode: envBasedConfig.mode,
    entry: entry(envBasedConfig),
    output: output(envBasedConfig),
    module: {
      rules: rules(envBasedConfig),
    },
    plugins: plugins(envBasedConfig),
    resolve: resolve(envBasedConfig),
    ...(mode === ENV.DEV
      ? {
          devServer: devServer(envBasedConfig),
          devtool: devToolsMode || DEV_TOOLS[1],
        }
      : {}),
  };
};
