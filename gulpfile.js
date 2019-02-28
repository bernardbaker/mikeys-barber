var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();


gulp.task('styles',function() {
  gulp.src('resources/css/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('public/css/'))
    .pipe(browserSync.stream())
});


gulp.task('browser-sync', function() {
  browserSync.init({
      proxy: "localhost:5000"
  });


  gulp.watch("views/*.ejs").on('change', browserSync.reload);


});


gulp.task('watch',['browser-sync'], function() {
  gulp.watch('resources/css/styles.css', ['styles']);
});
