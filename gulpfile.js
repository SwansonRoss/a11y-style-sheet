const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('a11y.css'))
        .pipe(gulp.dest('.'));
}


function defaultTask(cd) {
    buildStyles();
    cd();
}

exports.default = defaultTask;
exports.buildStyles = buildStyles;