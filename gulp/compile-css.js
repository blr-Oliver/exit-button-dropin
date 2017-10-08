var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compile:css', function(done){
  gulp
    .src('./**/*.scss', { cwd: 'src' })
    .pipe(sass())
    .pipe(gulp.dest('tmp', {overwrite: true}))
    .on('end', done);
});