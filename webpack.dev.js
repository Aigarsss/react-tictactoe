const path = require('path');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js',
        assetModuleFilename: 'static/[hash][ext][query]'
    },
    devServer: {
        contentBase: "./dist",
        hot: true,
        open: true
    }
})