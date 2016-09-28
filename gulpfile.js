'use strict';
var gulp = require('gulp');
// var exec = require('child_process').exec;
var gulpSequence = require('run-sequence');
var bower = require('gulp-bower');
var filter = require('gulp-filter');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var mocha = require('gulp-mocha');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
// var reload = browserSync.reload;


gulp.task('default',function(){
  gulpSequence('bower','serve');
});

gulp.task('bower', function() {
  return bower('./bower_components')
    .pipe(gulp.dest('./public/lib'));
});

gulp.task('lint',function(){
  var jsFilter = filter(['gruntfile.js', 'public/js/**/*.js', 'test/**/*.js', 'app/**/*.js']);
  return gulp.src('./**/*.js')
  .pipe(jsFilter)
  .pipe(jshint);
});

gulp.task('sass',function(){
  return gulp.src('public/css/common.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error',sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('public/css/common.css'));
});

gulp.task('test',function(){
  return gulp.src(['test/**/*.js'],{read: false})
  .pipe(mocha({
    reporter: 'spec'
  }));
});

gulp.task('nodemon',function(){
  var server = nodemon({
    script: 'server.js',
    ignore: ['README.md', 'node_modules/**', '.DS_Store'],
    tasks: ['sass','lint']
  });

  server.on('restart',function(){
    console.log('Server restarted');
  })
  .on('crash',function(){
    console.log('App crashed');
    //restart server after 10 seconds interval
    server.emit('restart',10);
  });
});

gulp.task('serve',['nodemon'],function(){
  browserSync({
    proxy: 'localhost:3000',
    port: 5000
  });
});
