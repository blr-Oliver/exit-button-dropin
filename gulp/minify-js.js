var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('minify:js', function(done) {
  gulp.src('exit-button.js', { cwd: 'tmp' })
    .pipe(uglify())
    .pipe(gulp.dest('dist', {overwrite: true}))
    .on('end', done);
});
