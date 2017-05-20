var gulp = require('gulp');
var sass = require('gulp-sass');

//compile manuellement
gulp.task('sass', function(){
  return gulp.src('app/scss/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});

//Compile automatiquement dès qu'il est lancé
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // autres observations
})