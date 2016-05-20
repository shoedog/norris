var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var KarmaServer = require('karma').Server;
var jshint = require('gulp-jshint');
var modify = require('gulp-modify');
var fs = require('fs');
var karmaSpec = require('karma-spec-reporter');
var gshell = require('gulp-shell');

var paths = {
  sass: ['./scss/**/*.scss'],
  js: ['./www/app/**/*.js']
};

gulp.task('default', ['sass', 'tdd']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('lint', function () {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
});

//Test
gulp.task('test', function(done){
  new KarmaServer({
    configFile: _dirname + 'tests/karma.conf.js',
    singleRun: true
  }, function (karmaExitStatus) {
    if (karmaExitStatus) {
      throw("Tests Failed from Karma Exit Status: " + karmaExitStatus);
    } else {
      done();
    }
  });
  server.start();
});

//Test Using Karma's Watchers
gulp.task('tdd', function(done){
  new KarmaServer({
    configFile: __dirname + '/tests/karma.conf.js'
  }, done).start();
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
