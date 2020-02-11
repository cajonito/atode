const { src, dest, series, watch } = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const ts = require('gulp-typescript');

function toGas() {
  return browserify('./build/js/main.js')
    .transform('babelify')
    .plugin('gasify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(dest('./build/gas'));
}

function tsCompile() {
  let tsProject = ts.createProject('tsconfig.json');
  return src(['src/**/*.ts'])
    .pipe(tsProject())
    .pipe(dest('./build/js/'));
}

exports.build = series(tsCompile, toGas);