const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');

const isEnvDevelopment = process.env.NODE_ENV === 'development';
const isEnvProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isEnvDevelopment ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss']
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
              modules: true
              // sourceMap: isEnvDevelopment
            }
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
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
              sourceMap: true
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
    })
  ],
  devServer: {
    port: 5000
  }
};

console.log(isEnvDevelopment, 'asassa', process.env.NODE_ENV);
