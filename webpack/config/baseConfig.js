import { ENV } from '../enums';

export default (rootPath, mode) => {
  const envBasedConfig = {
    [ENV.DEV]: {
      host: 'localhost',
      protocol: 'http',
      port: 5000,
    },
  };

  return {
    ...envBasedConfig[mode],
    rootPath,
    dist: 'dist',
    mode,
    target: 'web',
  };
};
