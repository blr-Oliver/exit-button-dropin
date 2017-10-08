var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');

gulp.task('minify:css', function(done){
  gulp.src('exit-button.css', { cwd: 'tmp' })
    .pipe(cleanCss({ rebase: false }))
    .pipe(gulp.dest('tmp', {overwrite: true}))
    .on('end', done);
});
