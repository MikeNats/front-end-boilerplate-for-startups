import { AppEnvConfig, Apps } from 'types/global';
import { Environment } from 'enums/index';

export const home = (
  domain: string,
  remote: (
    app: AppEnvConfig,
    env: Environment,
  ) => Partial<Record<Apps, string>>,
): AppEnvConfig =>
  ({
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
  } as AppEnvConfig);
