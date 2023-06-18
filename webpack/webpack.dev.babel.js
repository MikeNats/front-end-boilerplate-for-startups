import path from 'path';
import { ENV, DEV_TOOLS } from './enums';
import config from './config';

const rootPath = path.resolve(__dirname, '../');
export default {
  ...config(rootPath, ENV.DEV, DEV_TOOLS[4]),
};
