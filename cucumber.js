let common = [
  './src/features/**/*.feature', // Specify our feature files
  '--require-module ts-node/register', // Load TypeScript module
  '--require ./src/features/**/*.ts', // Load step definitions
  '--format progress-bar', // Load progress-bar formatter
  '--publish-quiet', // Suppress Cucumber's publishing plugin logs
].join(' ');

module.exports = {
  default: common,
};
