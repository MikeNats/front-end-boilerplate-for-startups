import config from '../../config';

export default (rootPath: string, mode: Environment): BaseWebpackConfig => {
  return {
    ...config[mode],
    rootPath,
    dist: 'dist',
    mode,
    target: 'web',
  };
};
