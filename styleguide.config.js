const path = require("path");

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  },
  title: "React Components Library For The Clover Casino Project",
  styleguideDir: "dist-docs",
  moduleAliases: {
    "clover-ui-react": path.resolve(__dirname, "src")
  }
};