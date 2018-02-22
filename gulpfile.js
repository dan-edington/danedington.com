const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('css', () => {

  return gulp.src('./styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css'));

});

gulp.task('staticFiles', () => {

  const files = [
    './index.html',
    './favicon.ico',
    './assets/**/*.*'
  ];

  gulp.src(files, { base: './' })
    .pipe(gulp.dest('./build'));

});

gulp.task('build', ['css', 'staticFiles']);
