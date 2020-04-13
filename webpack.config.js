module.exports = {
  mode: process.env.WEBPACK_DEV_SERVER ? 'development' : 'production',
  entry: `${__dirname}/src/index.tsx`,
  output: {
    path: `${__dirname}/public`,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat'
    },
  },
  plugins: [],
  performance: {
    hints: false
  },
  devServer: {
    contentBase: `${__dirname}/public`,
    port: 3000,
    hot: true,
    open: true
  }
};
