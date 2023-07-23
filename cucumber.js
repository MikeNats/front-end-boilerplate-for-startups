let global = [
  'packages/**/features/**/*.feature', // Specify our feature files
  '--require packages/**/features/**/*.ts', // Load step definitions
];

let shared = [
  '--require-module ts-node/register/transpile-only', // Load TypeScript module
  '--format progress-bar', // Load progress-bar formatter
  '--require-module tsconfig-paths/register',
];
module.exports = {
  default: [...shared, ...global].join(' '),
  shared,
};
