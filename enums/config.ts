export enum Environment {
  LOCAL = 'local',
  DEV = 'development',
  TEST = 'test',
  UAT = 'uat',
  PROD = 'production',
}
export enum DevTools {
  Fastest = 'eval', // fastest
  Fast = 'eval-cheap-source-map', // fast
  Ok = 'eval-source-map', // ok
  Slow = 'inline-cheap-source-map', // slow
  Slowest = 'inline-source-map', // slowest
}

export default { Environment, DevTools };
