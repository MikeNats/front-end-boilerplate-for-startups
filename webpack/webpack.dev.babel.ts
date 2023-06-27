import path from 'path';
import * as mainConfig from '../config';
import { DevTools } from './enums';
import config from './config';

const rootPath = path.resolve(__dirname, '../');

export default {
  ...config(rootPath, mainConfig.default.env.LOCAL, DevTools.Slowest),
};
