import { AppEnvConfig } from 'types/global';

export const shell = (domain: string): AppEnvConfig =>
  ({
    appName: 'shell',
    exposes: { './Shell': './src/index' },
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
