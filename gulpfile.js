'use strict';

// 编译css
const projectName = 'ng-element-plus';
const {
  series,
  src,
  dest
} = require('gulp');
const sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
  return src(`./projects/${projectName}/${projectName}.scss`)
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest(`./dist/${projectName}`));
}

function copyfont() {
  return src('./node_modules/element-theme-chalk/src/fonts/**')
    .pipe(dest(`./dist/${projectName}/fonts`));
}

function copyReadme() {
  return src('./README.md')
    .pipe(dest(`./projects/${projectName}`))
}

exports.buildDemoCmp = series(clearDemoComponent, clearDoc, demoComponentPath, docPath, copyReadme);
exports.buildReadme = series(copyReadme);
exports.build = series(compile, copyfont);

// 编译demo到assets
const watch = require('gulp-watch');
const rename = require('gulp-rename');
const clean = require('gulp-clean');

function clearDemoComponent() {
  return src(['./src/assets/codes/'], {
    read: false,
    allowEmpty: true
  })
    .pipe(clean());
}

function clearDoc() {
  return src(['./src/assets/docs/'], {
    read: false,
    allowEmpty: true
  })
    .pipe(clean());
}

function demoComponentPath() {
  return src([`./projects/${projectName}/**/demo/*.component.ts`])
    .pipe(rename(function (path) {
      return {
        dirname: '',
        basename: path.basename,
        extname: ''
      };
    }))
    .pipe(dest('./src/assets/codes/'));
}

function docPath() {
  return src([`./projects/${projectName}/*/doc/*.md`])
    .pipe(rename(function (path) {
      const name = path.dirname.slice(0, path.dirname.indexOf('\\'));
      return {
        dirname: '',
        basename: name,
        extname: ''
      };
    }))
    .pipe(dest('./src/assets/docs/'));
}

function monitorAssets() {
  return watch([`./projects/${projectName}/**/demo/*.component.ts`, `./projects/${projectName}/*/doc/*.md`], function (file) {
    const source = file.history[0];
    if (source.indexOf('demo') > -1) {
      const path = source.slice(source.lastIndexOf('\\') + 1);
      const name = path.slice(0, path.lastIndexOf('.'));
      copyDemoComponent(source, name);
    } else {
      let name = source.slice(source.lastIndexOf(projectName) + projectName.length + 1);
      name = name.slice(0, name.indexOf('\\'));
      copyDoc(source, name);
    }
  });
}

function copyDemoComponent(source, name) {
  return src(source, {
    allowEmpty: true
  })
    .pipe(rename(name))
    .pipe(dest('./src/assets/codes/'));
}

function copyDoc(source, name) {
  return src(source, {
    allowEmpty: true
  })
    .pipe(rename(name))
    .pipe(dest('./src/assets/docs/'));
}

exports.serve = series(clearDemoComponent, clearDoc, demoComponentPath, docPath, monitorAssets);
