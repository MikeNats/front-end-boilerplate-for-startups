const domain = 'domain.com';
const config: Config = {
  env: {
    LOCAL: 'local',
    DEV: 'development',
    TEST: 'test',
    UAT: 'uat',
    PROD: 'production',
  },
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
};

export default config;
