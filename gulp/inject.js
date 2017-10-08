var gulp = require('gulp');
var insert = require('gulp-file-insert');

gulp.task('inject', function(done){
  gulp.src('src/exit-button.js', { base: 'src' })
    .pipe(insert({
      "TEMPLATE": "tmp/exit-button.html",
      "STYLE": "tmp/exit-button.css"
    }))
    .pipe(gulp.dest('tmp', { overwrite: true }))
    .on('end', done);
})