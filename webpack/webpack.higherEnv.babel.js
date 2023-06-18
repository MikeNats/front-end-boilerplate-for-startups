import path from 'path';
import { ENV } from './enums';
import config from './config';

const rootPath = path.resolve(__dirname, '../');
export default {
  ...config(rootPath, ENV.PROD),
};
