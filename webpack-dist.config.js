const { join } = require('path');

module.exports = {
  entry: {
    'p-defer-es5.production.min': './src/polyfill.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        include: [
          join(__dirname, 'node_modules/p-defer/')
        ],
        test: /\.m?js$/iu,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  forceAllTransforms: true
                }
              ]
            ]
          }
        }
      }
    ]
  },
  output: {
    path: join(__dirname, 'dist')
  }
};
