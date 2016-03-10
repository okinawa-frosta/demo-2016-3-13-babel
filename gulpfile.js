var gulp = require('gulp');
var path = require('path')
var webpack = require('webpack');

gulp.task('webpack', function() {
  webpack({
    entry: {
      index: ['./src/main.js']
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js'
    },
    module: {
      loaders: [{
        test   : /\.js$/,
        loader : 'babel',
        query  : {
          presets: [ 'es2015' ]
        },
        exclude: /(node_modules|bower_components)/
      }]
    }
  }, function(err, status) {
    console.log('webpack completed');
  });
});
