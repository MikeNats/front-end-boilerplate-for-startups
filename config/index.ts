import config from './apps';
import { Environment } from '../enums';
import { AppsEnvConfig } from 'types/global';

const { shell, home, apps } = config;
const appsEnvConfig = {
  [Environment.LOCAL as Environment]: {
    [apps.shell]: {
      ...shell.env.local,
      appName: shell.appName,
      exposes: {},
      remotes: {
        ...shell.remote(home, Environment.LOCAL),
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
        ...shell.remote(home, Environment.DEV),
        ...shell.remote(shell, Environment.DEV),
      },
    },
    [apps.home]: {
      ...home.env.development,
      appName: home.appName,
      exposes: home.exposes,
      remotes: { ...shell.remote(shell, Environment.DEV) },
    },
  },
  [Environment.TEST as Environment]: {
    [apps.shell]: {
      ...shell.env.test,
      appName: shell.appName,
      exposes: shell.exposes,
      remotes: {
        ...shell.remote(home, Environment.TEST),
        ...shell.remote(shell, Environment.TEST),
      },
    },
    [apps.home]: {
      ...home.env.test,
      appName: home.appName,
      exposes: home.exposes,
      remotes: { ...shell.remote(shell, Environment.TEST) },
    },
  },
  [Environment.UAT as Environment]: {
    [apps.shell]: {
      ...shell.env.uat,
      appName: shell.appName,
      exposes: shell.exposes,
      remotes: {
        ...shell.remote(home, Environment.UAT),
        ...shell.remote(shell, Environment.UAT),
      },
    },
    [apps.home]: {
      ...home.env.uat,
      appName: home.appName,
      exposes: home.exposes,
      remotes: { ...shell.remote(shell, Environment.UAT) },
    },
  },
  [Environment.PROD as Environment]: {
    [apps.shell]: {
      ...shell.env.production,
      appName: shell.appName,
      exposes: shell.exposes,
      remotes: {
        ...shell.remote(home, Environment.PROD),
        ...shell.remote(shell, Environment.PROD),
      },
    },
    [apps.home]: {
      ...home.env.production,
      appName: home.appName,
      exposes: home.exposes,
      remotes: { ...shell.remote(shell, Environment.PROD) },
    },
  },
} as AppsEnvConfig;

export { appsEnvConfig };
