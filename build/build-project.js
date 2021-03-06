const { getProjectPath } = require('./util/projectHelper')
const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');
process.env.PROJECT = process.argv[process.argv.length - 1]
if ('build/build-project.js' === process.env.PROJECT || process.env.PROJECT.substr(0,2) !== '--') {
    throw new Error('请指定projectName. e.g.: npm run project -- --projectName');
}
process.env.PROJECT = process.env.PROJECT.substr(2)
const projectDestDir = getProjectPath(`../../${process.env.PROJECT}/static/iview`)

gulp.task('compile-css', gulp.series(function(done) {
    return gulp.src(['../src/**/*.less', '!../src/**/_*.less'])
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename((path) => {
            path.extname = '.wxss';
        }))
        .pipe(gulp.dest(projectDestDir));
}));

gulp.task('compile-js', gulp.series(function(done) {
    return gulp.src(['../src/**/*.js'])
        .pipe(gulp.dest(projectDestDir));
}));

gulp.task('compile-json', gulp.series(function(done) {
    return gulp.src(['../src/**/*.json'])
        .pipe(gulp.dest(projectDestDir));
}));

gulp.task('compile-wxml', gulp.series(function(done) {
    return gulp.src(['../src/**/*.wxml'])
        .pipe(gulp.dest(projectDestDir));
}));

gulp.task('auto', gulp.series(function(done) {
    gulp.watch('../src/**/*.less', gulp.series('compile-css'));
    gulp.watch('../src/**/*.js', gulp.series('compile-js'));
    gulp.watch('../src/**/*.json',gulp.series('compile-json'));
    gulp.watch('../src/**/*.wxml', gulp.series('compile-wxml'));
}));

gulp.task('dev', gulp.series(['compile-css', 'compile-js', 'compile-json', 'compile-wxml', 'auto']));

gulp.task('default', gulp.series(['compile-css', 'compile-js', 'compile-json', 'compile-wxml']));
