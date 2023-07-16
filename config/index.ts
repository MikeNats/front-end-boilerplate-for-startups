import { Environment } from '../enums';
import { AppsEnvConfig } from 'types/global';
import { AppsNames, AppEnvConfig, Apps } from 'types/global';
import { home as homeConf } from '../packages/ui/home/config';
import { shell as shellConf } from '../packages/ui/shell/config';

const domain = 'domain.com';

const apps: AppsNames = {
  shell: 'shell',
  home: 'home',
};
const home = homeConf(domain);
const shell = shellConf(domain);

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

const appsEnvConfig = {
  [Environment.LOCAL as Environment]: {
    [apps.shell]: {
      ...shell.env.local,
      appName: shell.appName,
      exposes: {},
      remotes: {
        ...remote(home, Environment.LOCAL),
      },
    },
    [apps.home]: {
      ...home.env.local,
      appName: home.appName,
      exposes: home.exposes,
      remotes: {},
    },
  },
  [Environment.DEV as Environment]: {
    [apps.shell]: {
      ...shell.env.development,
      appName: shell.appName,
      exposes: shell.exposes,
      remotes: {
        ...remote(home, Environment.DEV),
        ...remote(shell, Environment.DEV),
      },
    },
    [apps.home]: {
      ...home.env.development,
      appName: home.appName,
      exposes: home.exposes,
      remotes: { ...remote(shell, Environment.DEV) },
    },
  },
  [Environment.TEST as Environment]: {
    [apps.shell]: {
      ...shell.env.test,
      appName: shell.appName,
      exposes: shell.exposes,
      remotes: {
        ...remote(home, Environment.TEST),
        ...remote(shell, Environment.TEST),
      },
    },
    [apps.home]: {
      ...home.env.test,
      appName: home.appName,
      exposes: home.exposes,
      remotes: { ...remote(shell, Environment.TEST) },
    },
  },
  [Environment.UAT as Environment]: {
    [apps.shell]: {
      ...shell.env.uat,
      appName: shell.appName,
      exposes: shell.exposes,
      remotes: {
        ...remote(home, Environment.UAT),
        ...remote(shell, Environment.UAT),
      },
    },
    [apps.home]: {
      ...home.env.uat,
      appName: home.appName,
      exposes: home.exposes,
      remotes: { ...remote(shell, Environment.UAT) },
    },
  },
  [Environment.PROD as Environment]: {
    [apps.shell]: {
      ...shell.env.production,
      appName: shell.appName,
      exposes: shell.exposes,
      remotes: {
        ...remote(home, Environment.PROD),
        ...remote(shell, Environment.PROD),
      },
    },
    [apps.home]: {
      ...home.env.production,
      appName: home.appName,
      exposes: home.exposes,
      remotes: { ...remote(shell, Environment.PROD) },
    },
  },
} as AppsEnvConfig;

export { appsEnvConfig };
