var gulp = require('gulp');

gulp.task('copy-assets', function(){
    return gulp.src('src/**/*.css')
      .pipe(gulp.dest('dist'));
});
