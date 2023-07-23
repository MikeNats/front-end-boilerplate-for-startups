import { AppEnvConfig } from 'types/global';
const port = 5000;
const shell = (domain: string): AppEnvConfig => ({
  appName: 'shell',
  exposes: { './Shell': './src/index' },
  env: {
    local: {
      protocol: 'http',
      domain: 'localhost',
      port,
    },
    development: {
      protocol: 'http',
      domain: `localhost`,
      port,
    },
    test: {
      protocol: 'https',
      domain: `test.${domain}`,
      port,
    },
    uat: {
      protocol: 'https',
      domain: `uat.${domain}`,
      port,
    },
    production: {
      protocol: 'https',
      domain: `${domain}`,
      port,
    },
  },
});
module.exports = shell;
