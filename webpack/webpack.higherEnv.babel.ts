import path from 'path';
const importedEnvironmentEnum = require('../enums').EnvironmentEnum;

import config from './config';

const rootPath = path.resolve(__dirname, '../');
export default {
  ...config(rootPath, importedEnvironmentEnum.PROD),
};
