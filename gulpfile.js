
var gulp = require('gulp');
require('require-dir')('gulp');

gulp.task('default', gulp.series('compile:css', 'minify:xml', 'base64:svg', 'minify:css', 'inject', 'minify:js'));