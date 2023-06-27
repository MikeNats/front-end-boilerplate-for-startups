import path from 'path';
import * as mainConfig from '../config';
import config from './config/index.js';

const rootPath = path.resolve(__dirname, '../');
export default {
  ...config(rootPath, mainConfig.default.env.PROD),
};
