var gulp = require('gulp');
var minify = require('gulp-pretty-data');

gulp.task('minify:xml', function(done){
  gulp
    .src('./**/*.{html,svg}', { cwd: 'src' })
    .pipe(minify({
      type: 'minify',
      preserveComments: false,
      extensions: {
        'html': 'xml',
        'svg': 'xml'
      }
    }))
    .pipe(gulp.dest('tmp', {overwrite: true}))
    .on('end', done);
});