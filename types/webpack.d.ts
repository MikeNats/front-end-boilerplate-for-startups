import { RuleSetRule } from 'webpack';
import { Environment } from '../enums';
import { Protocol, Apps } from './global';

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
  allowedHosts: string;
  historyApiFallback: boolean;
  headers: {
    [x: string]: string;
  };
};

declare type WebpackResolve = {
  extensions: string[];
  plugins: any[];
};

declare type WebpackRules = {
  test: RegExp;
  use: RuleSetRule[];
};

declare type EnvConfigAttr =
  | {
      [app in Apps]: BaseWebpackConfig;
    }
  | {};

declare type RemotesConfig =
  | {
      [app in Apps]: string;
    }
  | {};
