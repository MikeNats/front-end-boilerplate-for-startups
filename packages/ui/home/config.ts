import { AppEnvConfig } from 'types/global';

export const home = (domain: string): AppEnvConfig => ({
  appName: 'home',
  exposes: { './Home': './src/view/routes/Home', './utils': './src/utils' },
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
});
