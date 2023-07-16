import { Environment } from 'enums/index';
declare type Protocol = 'http' | 'https';
declare type Visual = 'reference' | 'test' | 'approve' | undefined;

declare type Apps = 'shell' | 'home';

declare type AppsConfig = {
  [x in Apps]: AppEnvConfigAttrs;
};

interface AppEnvConfigAttrs {
  appName?: Apps;
  protocol: Protocol;
  domain: string;
  port: number;
  exposes?: Record<string, string>;
  remotes?: Record<string, string>;
}

declare type AppsNames = {
  [x in Apps]: Apps;
};

declare type EnvConfig = {
  [x in Apps]: AppEnvConfigAttrs;
};

declare type AppsEnvConfig = {
  [env in Environment]: {
    [app in Apps]: AppEnvConfigAttrs;
  };
};

declare type Config = {
  [app in Apps]?: AppEnvConfigAttrs;
};

interface AppWebpackConfig extends AppEnvConfigAttrs {
  appPath: string;
  rootPath: string;
  dist: string;
  env: Environment;
  target: string;
}

interface AppEnvConfig {
  appName: Apps;
  exposes: Record<string, string> | string[];
  env: {
    local: AppEnvConfigAttrs;
    development: AppEnvConfigAttrs;
    test: AppEnvConfigAttrs;
    uat: AppEnvConfigAttrs;
    production: AppEnvConfigAttrs;
  };
}
