import { Apps, AppWebpackConfig } from 'types/global';
const { appsEnvConfig } = require('../../config');
const { Environment } = require('../../enums');

module.exports = (
  rootPath: string,
  env: typeof Environment,
): AppWebpackConfig => {
  const appName = process.env.APP as Apps;
  const appPath = `${rootPath}/packages/ui/${appName}`;
  return {
    appName,
    appPath,
    ...appsEnvConfig[env][appName],
    rootPath,
    env,
    dist: 'dist',
    target: 'web',
  };
};
