'use strict';
var gulp = require('gulp');
// var exec = require('child_process').exec;
var browserSync = require('browser-sync').create();
var gulpSequence = require('run-sequence');
var bower = require('gulp-bower');

gulp.task('default',function(){
  gulpSequence('bower','serve');
});

gulp.task('bower', function() {
  return bower('./bower_components')
    .pipe(gulp.dest('./public/lib'));
});

gulp.task('serve')
