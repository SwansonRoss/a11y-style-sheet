const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('.'));
}


function defaultTask(cd) {
    buildStyles();
    cd();
}

exports.default = defaultTask;
exports.buildStyles = buildStyles;