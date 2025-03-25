const handleRename = require('./handleRename').default;
const browserify = require('browserify');
const minifyJs = require('gulp-uglify');
const rename = require('gulp-rename');
const buffer = require('gulp-buffer');
const argv = require('yargs').argv;
const tap = require('gulp-tap');
const gulp = require('gulp');
const path = require('path');

const dest = path.join(argv.path, '/build/');

// compile VT javascript 
const compileJS = () => gulp
    .src([
      // VT
      path.join(argv.path, '/vt/core/js/index.js'),
      path.join(argv.path, '/vt/settings/index.js'),
      path.join(argv.path, '/vt/locale/*/js/index.js'),
    ], { allowEmpty: true })
    .pipe(tap(file => {file.contents = browserify(file.path, { debug: true }).bundle();}))
    .pipe(buffer())
    .pipe(minifyJs())
    .pipe(rename(handleRename))
    .pipe(gulp.dest(dest))

gulp.task('compileJs', compileJS);