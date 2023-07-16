import path from 'path';
import config from './config';
import { Environment, DevTools } from '../enums';

const rootPath = path.resolve(__dirname, '../');

export default {
  ...config(rootPath, Environment.LOCAL, DevTools.Slowest),
};
