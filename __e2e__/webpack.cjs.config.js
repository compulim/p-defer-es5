module.exports = {
  entry: './web.js',
  mode: 'production',
  output: {
    filename: 'main.webpack-cjs.js'
  },
  resolve: {
    mainFields: ['main']
  }
};
