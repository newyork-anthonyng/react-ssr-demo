const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  
  entry: "./index.js",
  
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};