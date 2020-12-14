const { environment } = require('@rails/webpacker')
const path = require('path');
const { VueLoaderPlugin } = require("vue-loader");

const vue = {
  test: /\.vue(\.erb)?$/,
  use: [
    {
      loader: 'vue-loader'
    },
  ],
}

const resolve = {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      '@app': path.resolve(__dirname, '..', '..', 'app/javascript/app')
    },
  },
};

environment.resolve = resolve;
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin());
environment.loaders.prepend('vue', vue);

module.exports = environment
