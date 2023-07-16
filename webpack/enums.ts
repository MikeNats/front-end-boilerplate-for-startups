export enum DevTools {
  Fastest = 'eval', // fastest
  Fast = 'eval-cheap-source-map', // fast
  Ok = 'eval-source-map', // ok
  Slow = 'inline-cheap-source-map', // slow
  Slowest = 'inline-source-map', // slowest
}

// Usage example:
export const devTool: DevTools = DevTools.Fastest;
