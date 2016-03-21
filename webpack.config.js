var path = require('path');

module.exports = {
  entry: {
    app: './client/index.jsx'
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: '[name].js'
  },

  debug: true,
  devtool: 'source-map',

  module: {
    loaders: [

      // JSX loader for react app

      { test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: [path.resolve(__dirname, 'node_modules')],
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-runtime'] } },

      // Style loader for component based stylesheets

      { test: /\.pcss$/,
        loader: 'style-loader!css-loader?sourceMaps!postcss-loader' },

      // Font loaders for fontawesome style files

      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff' },

      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader' }

    ]

  },

  postcss: function(webpack) {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('postcss-nested'),
      require('postcss-simple-vars'),
      require('autoprefixer')({
        remove: true,
        browsers: ['last 2 versions']
      })
    ];
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
