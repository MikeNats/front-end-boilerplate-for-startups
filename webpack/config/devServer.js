export default (baseConfig) => ({
  static: `${baseConfig.rootPath}/${baseConfig.dist}`,
  port: baseConfig.port,
  host: baseConfig.host,
  server: baseConfig.protocol,
  compress: true,
  liveReload: true,
});
