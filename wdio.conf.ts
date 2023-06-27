// see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
export const config = {
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: './tsconfig.json',
    },
  },
};
