import path from 'path';
const config = require('./config');
const { Environment, DevTools } = require('../enums');

const rootPath = path.resolve(__dirname, '../');
const env = process.env.ENV as keyof typeof Environment;
console.log('>>>>', process.env.ENV);
export default {
  ...config(rootPath, Environment[env], DevTools.Slowest),
};
