const { environment } = require('@rails/webpacker');
const vue = require('./loaders/vue');
const resolve = require('./resolve');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const appEnvironment = { ...environment, ...resolve };
appEnvironment.plugins.set('VueLoaderPlugin', new VueLoaderPlugin());
appEnvironment.loaders.set('vue', vue);

module.exports = environment;
