module.exports = {
  entry: "./src/entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
	},
  node: {
  fs: 'empty'
},
	devtool: "source-map"
};
