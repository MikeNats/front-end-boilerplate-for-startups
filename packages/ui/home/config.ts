import { AppEnvConfig } from 'types/global';
const port = 5001;

const home = (domain: string): AppEnvConfig => ({
  appName: 'home',
  exposes: { './Home': './src/view/routes/Home' },
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

module.exports = home;
