//const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "ts-loader"
            }
        ]
    },
    {
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader"
  }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
}
};