const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');
const webpack = require('webpack');

module.exports = (env, argv) => {
  process.env.NODE_ENV = argv.mode;
  const isEnvDevelopment = argv.mode === 'development';
  const isEnvProduction = argv.mode === 'production';

  return {
    mode: argv.mode,
    entry: './src/index.tsx',
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'build')
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss']
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'public/static/media/[name].[hash:8].[ext]'
              }
            }
          ]
        },
        {
          test: /\.svg$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                generator: (content) => svgToMiniDataURI(content.toString())
              }
            }
          ]
        },
        {
          test: /\.module\.s(a|c)ss$/,
          use: [
            isEnvDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  exportLocalsConvention: 'camelCaseOnly'
                }
              }
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isEnvDevelopment
              }
            }
          ]
        },
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: [
            isEnvDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isEnvDevelopment
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    },
    devtool: 'inline-source-map',
    plugins: [
      new HtmlWebpackPlugin(
        // eslint-disable-next-line prefer-object-spread
        Object.assign(
          {},
          {
            inject: true,
            template: path.resolve(__dirname, 'public/index.html')
          },
          isEnvProduction
            ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
              }
            }
            : undefined
        )
      ),
      new MiniCssExtractPlugin({
        filename: isEnvDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isEnvDevelopment ? '[id].css' : '[id].[hash].css'
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser'
      })
    ],
    devServer: {
      port: 5000,
      historyApiFallback: true,
      contentBase: './src',
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          pathRewrite: { '^/api': '' }
        }
      }
    }
  };
};
