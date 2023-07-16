import { AppsNames, AppEnvConfig, Apps } from 'types/global';
import { Environment } from '../enums';
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

const shell: AppEnvConfig = {
  appName: 'shell',
  exposes: { './Shell': './src/index' },
  remote: (
    app: AppEnvConfig,
    env: Environment,
  ): Partial<Record<Apps, string>> => ({
    ...remote(app, env),
  }),
  env: {
    local: {
      protocol: 'http',
      domain: 'localhost',
      port: 5000,
    },
    development: {
      protocol: 'https',
      domain: `dev.${domain}`,
      port: 80,
    },
    test: {
      protocol: 'https',
      domain: `test.${domain}`,
      port: 80,
    },
    uat: {
      protocol: 'https',
      domain: `uat.${domain}`,
      port: 80,
    },
    production: {
      protocol: 'https',
      domain: `${domain}`,
      port: 80,
    },
  },
};

const home: AppEnvConfig = {
  appName: 'home',
  exposes: { './Home': './src/view/routes/Home', './utils': './src/utils' },
  remote: (
    app: AppEnvConfig,
    env: Environment,
  ): Partial<Record<Apps, string>> => ({
    ...remote(app, env),
  }),
  env: {
    local: {
      protocol: 'http',
      domain: 'localhost',
      port: 5001,
    },
    development: {
      protocol: 'https',
      domain: `dev.${domain}`,
      port: 8081,
    },
    test: {
      protocol: 'https',
      domain: `test.${domain}`,
      port: 8081,
    },
    uat: {
      protocol: 'https',
      domain: `uat.${domain}`,
      port: 8081,
    },
    production: {
      protocol: 'https',
      domain: `${domain}`,
      port: 8081,
    },
  },
};

const config = { home, shell, apps };

export default config;
