'use strict';
var gulp = require('gulp');
// var exec = require('child_process').exec;
var gulpSequence = require('run-sequence');
var bower = require('gulp-bower');
var filter = require('gulp-filter');
var jshint = require('gulp-jshint');


gulp.task('default',function(){
  gulpSequence('bower','serve');
});

gulp.task('bower', function() {
  return bower('./bower_components')
    .pipe(gulp.dest('./public/lib'));
});

gulp.tast('lint',function(){
  var jsFilter = filter(['gruntfile.js', 'public/js/**/*.js', 'test/**/*.js', 'app/**/*.js']);
  gulp.src('./**/*.js')
  .pipe(jsFilter)
  .pipe(jshint);
});
