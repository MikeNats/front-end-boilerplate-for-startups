import { AppEnvConfig, Apps } from 'types/global';
import { Environment } from 'enums/index';
export const shell = (
  domain: string,
  remote: (
    app: AppEnvConfig,
    env: Environment,
  ) => Partial<Record<Apps, string>>,
): AppEnvConfig =>
  ({
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
  } as AppEnvConfig);
