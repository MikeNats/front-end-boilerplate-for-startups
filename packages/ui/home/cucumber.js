const conf = require('../../../cucumber.js');
let scoped = [
  './features/**/*.feature', // Specify our feature files
  '--require ./features/**/*.ts', // Specify our feature files
];
module.exports = {
  default: [...scoped, ...conf.shared].join(' '),
};
