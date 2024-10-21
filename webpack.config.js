import path from 'path';
import { cwd } from 'process';

export default {
  entry: './src/index.ts',
  target: 'node',
  output: {
    path: path.resolve(cwd(), 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  },
};
