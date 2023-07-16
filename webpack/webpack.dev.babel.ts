import path from 'path';
import { DevTools } from './enums';
import config from './config';
import { Environment } from '../enums';

const rootPath = path.resolve(__dirname, '../');

export default {
  ...config(rootPath, Environment.LOCAL, DevTools.Slowest),
};
