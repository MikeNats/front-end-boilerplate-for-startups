declare type Protocol = 'http' | 'https';
declare type Visual = 'reference' | 'test' | 'approve' | undefined;

declare type Environment =
  | 'local'
  | 'development'
  | 'test'
  | 'uat'
  | 'production';

declare type EnvConfig = {
  protocol: Protocol;
  domain: string;
  port: number;
};

interface EnvMapping {
  LOCAL: Environment;
  DEV: Environment;
  TEST: Environment;
  UAT: Environment;
  PROD: Environment;
}

declare type Config = {
  env: EnvMapping;
  local: EnvConfig;
  development: EnvConfig;
  test: EnvConfig;
  uat: EnvConfig;
  production: EnvConfig;
};

interface BaseWebpackConfig {
  protocol: Protocol;
  domain: string;
  port: number;
  rootPath: string;
  dist: string;
  mode: Environment;
  target: string;
}
