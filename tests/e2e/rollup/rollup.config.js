import commonJS from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    file: 'dist/main.js',
    format: 'iife'
  },
  plugins: [resolve(), commonJS()]
};
