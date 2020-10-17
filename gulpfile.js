'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const rollup = require('gulp-rollup');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
var babel = require("gulp-babel");
 
sass.compiler = require('node-sass');

const jsSRC = 'app/core/js/photus.js';
const jsDIST = 'dist';
const jsFILES = "./app/**/*.js"

const scssSRCS = 'app/**/*.scss';
const cssDIST = 'dist/css';
 
gulp.task('scss', function () {
  return gulp.src(scssSRCS)
    .pipe(concat('main.scss'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(cssDIST))
    .pipe(browserSync.stream());
});

gulp.task('autoprefixer', function () {
  return gulp.src('dist/css/**/*.css')
  .pipe(autoprefixer({
      cascade: false
  }))
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', () =>{
  return gulp.src(jsFILES)
        .pipe(rollup({
          allowRealFiles: true,
          format: "umd",
          moduleName: "Photus",
          entry: jsSRC
        }))
        .pipe(rename("photus.js"))
        .pipe(gulp.dest(jsDIST)) // --> writing rolledup
        // ----------- babelizing --------------
        .pipe(babel())
        .pipe(rename("photus.js"))
        .pipe(gulp.dest(jsDIST)) // --> writing babelized ES5
        // ----------- minifying --------------
        .pipe(uglify())
        .pipe(rename( { extname: '.min.js'}))
        .pipe(gulp.dest(jsDIST)); 
  });

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './',
            index: './demo/index.html'
        },
    });

    gulp.watch(scssSRCS, gulp.series('scss'));
    gulp.watch("demo/*.html").on('change', browserSync.reload);
    gulp.watch("app/**/*.js").on('change', gulp.parallel('js', browserSync.reload));
});

gulp.task('default', gulp.series(gulp.parallel('scss', 'autoprefixer','js' , 'serve')));