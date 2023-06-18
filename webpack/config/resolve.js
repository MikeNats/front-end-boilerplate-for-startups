import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export default (baseConfig) => ({
  extensions: ['.tsx', '.ts', '.js'],
  plugins: [
    new TsconfigPathsPlugin({
      configFile: `${baseConfig.rootPath}/tsconfig.json`,
    }),
  ],
});
