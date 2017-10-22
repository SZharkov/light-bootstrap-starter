var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify');


// Minify JS
gulp.task('minify', function() {
  gulp.src([
    './source/js/vendors/jquery.min.js',
    './source/js/vendors/popper.min.js',
    './source/js/vendors/bootstrap.min.js',
    './source/js/main.js'
  ])
    .pipe(concat('compressed.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function() {
  gulp.watch('source/js/**/*', ['minify']);
});

gulp.task('default', ['minify']);