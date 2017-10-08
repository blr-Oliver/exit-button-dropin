var gulp = require('gulp');
var base64 = require('gulp-base64');
var concat = require('gulp-concat-css');
 
gulp.task('base64:svg', function (done) {
    gulp.src('**/*.css', {cwd: 'tmp'} )
      .pipe(base64({extensions: ['svg', 'png']}))
      .pipe(concat('exit-button.css'))
      .pipe(gulp.dest('tmp', { overwrite: true }))
      .on('end', done);
});