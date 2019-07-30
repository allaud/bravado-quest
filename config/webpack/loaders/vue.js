const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  test: /\.vue(\.erb)?$/,
  use: [
    {
      loader: 'vue-loader',
      options: { extractCSS: isProduction },
    },
  ],
};
