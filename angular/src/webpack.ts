import { Configuration } from 'webpack';
import { name } from '../package.json';

export default {
  optimization: {
    runtimeChunk: false
  },
  output: {
    filename: name + '.js'
  }
} as Configuration;
