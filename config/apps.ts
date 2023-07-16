import { AppsNames, AppEnvConfig, Apps } from 'types/global';
import { Environment } from '../enums';
import { home } from '../packages/ui/home/config';
import { shell } from '../packages/ui/shell/config';

const domain = 'domain.com';

const apps: AppsNames = {
  shell: 'shell',
  home: 'home',
};

const remote = (
  app: AppEnvConfig,
  env: Environment,
): Partial<Record<Apps, string>> => {
  const { appName } = app;
  const { protocol, domain, port } = app.env[env];
  return {
    [`${appName}`]: `${appName}@${protocol}://${domain}:${port}/remoteEntry.js`,
  };
};

const config = {
  home: home(domain, remote) as AppEnvConfig,
  shell: shell(domain, remote) as AppEnvConfig,
  apps: apps as AppsNames,
};

export default config;
