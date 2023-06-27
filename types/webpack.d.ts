import { RuleSetRule } from 'webpack';

interface BaseWebpackConfig {
  protocol: Protocol;
  domain: string;
  port: number;
  rootPath: string;
  dist: string;
  mode: Environment;
  target: string;
}

declare type WebpackEntry = {
  app: string[];
};

declare type WebpackEntries = {
  [x in Environment]: {
    app: string[];
  };
};

declare type WebpackOutput = {
  filename: string;
  chunkFilename: string;
  publicPath: string;
  path: string;
};

declare type DevServer = {
  static: string;
  port: number;
  host: string;
  server: Protocol;
  compress: boolean;
  liveReload: boolean;
};

declare type WebpackResolve = {
  extensions: string[];
  plugins: any[];
};

declare type WebpackRules = {
  test: RegExp;
  use: RuleSetRule[];
};
