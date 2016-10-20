'use strict';
var gulp = require('gulp');
require('dotenv').config();
var exec = require('child_process').exec;
var gulpSequence = require('run-sequence');
var bower = require('gulp-bower');
var filter = require('gulp-filter');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var mocha = require('gulp-mocha');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var istanbul = require('gulp-istanbul');
var fs = require('fs');
var reload = browserSync.reload;
var port = process.env.PORT;


gulp.task('default',function(){
  gulpSequence(['serve','watch-changes']);
});

gulp.task('pre-test',function(){
  return gulp.src(['test/**/*.js'])
  .pipe(istanbul())
  .pipe(istanbul.hookRequire());
});

gulp.task('test',['pre-test'],function(){
  return gulp.src(['test/**/*.js'])
  .pipe(mocha({
    reporter: 'spec'
  }))
  .pipe(istanbul.writeReports())
  .once('error', function(){
      process.exit(1);
  })
  .once('end', function(){
      process.exit();
  });
});

gulp.task('nodemon',function(){
  var server = nodemon({
    script: 'server.js',
    ignore: ['README.md', 'node_modules/**', '.DS_Store'],
    tasks: []
  });

  server.on('start',function(){
    console.log('Server started');
  })
  .on('restart',function(){
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
    proxy: 'localhost:'+process.env.PORT,
    port: 5002,
    ui: {
      port: 5001
    }
  });
});

//
gulp.task('on-js-change-backend',function(done){
  reload();
  done();
});

//
gulp.task('on-js-change-frontend',function(done){
 //Recompile typescript
  exec('tsc public/**/*.ts', function(err, stdout, stderr) {
    console.log(stdout);
    reload();
    done();
  });
});

gulp.task('watch-changes',function(){
  gulp.watch(['app/**/*.js'],['on-js-change-backend']);
  gulp.watch(['public/**/*.ts'],['on-js-change-frontend']);
});
