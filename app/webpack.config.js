const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const autoprefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // context: path.resolve(__dirname, 'app'),
    entry: {
      index: __dirname + '/static/packages/index.pack.js',
    },
    output: {
      path: __dirname + '/static/dist/bundle',
      filename: 'js/[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: "Webpack Output",
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: "css/[name].css"
        }),
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: 'file-loader',
              },
              {loader: 'extract-loader'},
              {
                loader: MiniCssExtractPlugin.loader
              },
              {loader: 'css-loader'},
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [autoprefixer()]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  // Prefer Dart Sass
                  implementation: require('sass'),
                  sassOptions: {
                    includePaths: ['./node_modules'],
                  },
                },
              },
            ],
          },
          {
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader'
              },
            ],
          },
        ]
    },
    devServer: {
        contentBase: './static/dist',
        open: true
    },
};