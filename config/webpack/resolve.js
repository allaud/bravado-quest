const path = require('path');

module.exports = {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      '@app': path.resolve(__dirname, '..', '..', 'app/javascript/app'),
    },
  },
};
