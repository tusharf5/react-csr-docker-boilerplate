import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import config from '../webpack/webpack.config.prod';

config.plugins.push(new BundleAnalyzerPlugin());

process.env.NODE_ENV = 'production';

const compiler = webpack(config);

// eslint-disable-next-line no-unused-vars
compiler.run((error, stats) => {
  if (error) {
    throw new Error(error);
  }
});
