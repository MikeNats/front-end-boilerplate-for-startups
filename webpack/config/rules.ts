import { RuleSetRule } from 'webpack';
export default (): RuleSetRule[] => [
  {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
      },
    ],
  },
  {
    test: /\.(png|jpg|svg|gif)$/i,
    loader: 'file-loader',
  },
  {
    test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,

    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
          publicPath: '../fonts/',
        },
      },
    ],
  },
];
