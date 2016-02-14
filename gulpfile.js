////////////////////////////////////////////////////////
//////// Required
////////////////////////////////////////////////////////

var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  less = require('gulp-less'),
  minifycss = require('gulp-minify-css'),
  autoprefixer = require('gulp-autoprefixer'),
  typescript = require('gulp-typescript'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  plumber = require('gulp-plumber');

////////////////////////////////////////////////////////
//////// scripts task
////////////////////////////////////////////////////////

gulp.task('scripts',function(){
  gulp.src(['assets/js/**/*.ts'])
    .pipe(plumber())
    .pipe(typescript())
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'))
    .pipe(reload({stream:true}));
});

////////////////////////////////////////////////////////
//////// less tasks
////////////////////////////////////////////////////////

gulp.task('less',function(){
  gulp.src('assets/css/**/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest('assets/css'))
    .pipe(rename({suffix:'.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('assets/css'))
    .pipe(reload({stream:true}));
});

////////////////////////////////////////////////////////
//////// hbs tasks
 ////////////////////////////////////////////////////////
gulp.task('hbs',function(){
    gulp.src('*.hbs')
    .pipe(reload({stream:true}));
});

////////////////////////////////////////////////////////
//////// browser reload
////////////////////////////////////////////////////////
gulp.task('browser-sync',function(){
  browserSync.init({
    proxy:"localhost:2368"
  });
});


////////////////////////////////////////////////////////
//////// watch tasks
////////////////////////////////////////////////////////

gulp.task('watch',function(){
    gulp.watch('assets/js/**/*.ts',['scripts'])
    gulp.watch('assets/css/**/*.less',['less'])
    gulp.watch('*.hbs',['hbs'])
})


////////////////////////////////////////////////////////
//////// default task
////////////////////////////////////////////////////////
 gulp.task('default',['scripts','watch','less','hbs','browser-sync'])
