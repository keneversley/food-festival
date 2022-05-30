const webpack = require("webpack");
const path = require("path");

plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
],


module.exports = {
    entry: './assets/js/script.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
      },

      mode: 'development'


};