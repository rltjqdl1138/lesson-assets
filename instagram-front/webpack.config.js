const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const express = require('express')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.tsx'
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  
  devServer: {
    port: 8080,
    
    setupMiddlewares: (middlewares, devServer) => {
      devServer.app.use('/css', express.static(path.resolve(__dirname, 'public', 'css')));
      devServer.app.use('/img', express.static(path.resolve(__dirname, 'public', 'img')));
      devServer.app.use('/fonts', express.static(path.resolve(__dirname, 'public', 'fonts')));
      devServer.app.use('/js', express.static(path.resolve(__dirname, 'public', 'js')));
      devServer.app.use('/lib', express.static(path.resolve(__dirname, 'public', 'lib')));
      devServer.app.use('/scss', express.static(path.resolve(__dirname, 'public', 'scss')));
      return middlewares;
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      },
      '/gltf':{
        headers: {
          'Cache-Control': 'no-cache'
        },
        //target: 'https://bucket-thkgmn.s3.ap-northeast-2.amazonaws.com/',
        target: 'https://bucket-crls72.s3.eu-central-1.amazonaws.com/',
        changeOrigin: true,
      }
    },

    hot: true,
    historyApiFallback: true
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    fallback: {
      "buffer": require.resolve("buffer")
    }
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ]
}
