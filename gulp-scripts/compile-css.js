const handleRename = require('./handleRename').default;
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const argv = require('yargs').argv;
const gulp = require('gulp');
const path = require('path');
const fs = require('fs');

const reportError = function(error) {
  notify({
      title: 'Gulp Task Error',
      message: 'Check the console.',
  }).write(error);
  this.emit('end');
};

const version = JSON.parse(fs.readFileSync('./package.json')).version
const prefixerOptions = ['last 20 versions', '> 1%', 'ie 8', 'ie 9'];
const dest = path.join(argv.path, 'build/');

// compile scss 
const compileScss = () =>
    gulp
        .src([
          // VT
          // path.join(argv.path, '/vt/core/scss/index.scss'),
          path.join(argv.path, '/vt/settings/index.scss'),
          path.join(argv.path, '/vt/locale/*/scss/index.scss'),

        ], { allowEmpty: true })
        .pipe(plumber({ errorHandler: reportError }))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError, reportError))
        .pipe(autoprefixer(prefixerOptions))
        .pipe(rename(handleRename))
        .pipe(gulp.dest(dest))

// minimize css 
const compileCss = () => gulp
    .src([path.join(argv.path, '/*/css/*.css')])
    .pipe(cleanCss({ compatibility: '*' }))
    .pipe(autoprefixer(prefixerOptions))
    .pipe(rename((filePath, file) => {
      const fileType = file.dirname.split('/').at(-2)
      const clientName = file.dirname.split('/').at(-4)
      const basename = fileType === 'core' ? `pp-vt-v${version}` : `${clientName}-${fileType}`
      const dirname = `/${fileType}/`
      return { ...filePath, extname: '.min.css', basename, dirname }
    }))
    .pipe(gulp.dest(dest))

gulp.task('compileScss', compileScss)
gulp.task('minifyCss', compileCss)
gulp.task('compileStyles', gulp.parallel('compileScss', 'minifyCss'))