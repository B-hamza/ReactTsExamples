module.exports = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module: {
    loaders: [
      {test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/}
    ],
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.webpack.js', '.web.js']
  }
};
