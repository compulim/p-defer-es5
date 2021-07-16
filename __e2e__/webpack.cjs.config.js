module.exports = {
  entry: './main.js',
  mode: 'development',
  output: {
    filename: 'main.webpack-cjs.js'
  },
  resolve: {
    mainFields: ['main']
  }
};
