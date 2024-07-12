const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/main/main.ts", // この行を確認してください
  target: "electron-main",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: "ts-loader" }],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
