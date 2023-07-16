import { Apps, AppWebpackConfig } from 'types/global';
import { appsEnvConfig } from '../../config';
import { Environment } from '../../enums';

export default (rootPath: string, env: Environment): AppWebpackConfig => {
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
