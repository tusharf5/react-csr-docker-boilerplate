import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const sassModules = env => {
  const devConfig = {
    test: /(module\.css|module\.scss|module\.sass)$/,
    use: [
      {
        loader: 'style-loader',
        options: {},
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: {
            localIdentName: '[local]___[hash:base64:5]', // [name]__
          },
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [require('autoprefixer')],
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          sassOptions: {
            includePaths: [path.resolve(__dirname, '../src')],
          },
        },
      },
    ],
  };

  const prodConfig = {
    test: /(module\.css|module\.scss|module\.sass)$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: {
            localIdentName: '[local]___[hash:base64:5]', // [name]__
          },
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [require('cssnano'), require('autoprefixer')],
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          sassOptions: {
            includePaths: [path.resolve(__dirname, '../src')],
          },
        },
      },
    ],
  };

  return env === 'production' ? prodConfig : devConfig;
};

export const sass = env => {
  const devConfig = {
    test: /(\.css|\.scss|\.sass)$/,
    exclude: /(module\.css|module\.scss|module\.sass)$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [require('autoprefixer')],
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          sassOptions: {
            includePaths: [path.resolve(__dirname, '../src')],
          },
        },
      },
    ],
  };

  const prodConfig = {
    test: /(\.css|\.scss|\.sass)$/,
    exclude: /(module\.css|module\.scss|module\.sass)$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [require('cssnano'), require('autoprefixer')],
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          sassOptions: {
            includePaths: [path.resolve(__dirname, '../src')],
          },
        },
      },
    ],
  };

  return env === 'production' ? prodConfig : devConfig;
};
