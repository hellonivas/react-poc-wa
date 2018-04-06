/* Package JSON Import for Gulp Will be Here*/
var gulp = require('gulp');
var sass = require('gulp-sass');
/* Package JSON Import for Gulp Will be Here*/

/* Paths Will be Here*/
var paths = {
    scss: ['./src/**/*.scss']
};
/* Paths Will be Here*/

/* Generare the SCSS -> CSS Task */
gulp.task('Generate_CSS', function () {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src'));
});
/* Generare the SCSS -> CSS Task */

/* Watch the SCSS -> CSS Task */
gulp.task('Watch_SASS_Changes', function () {
    gulp.watch(paths.scss, ['Generate_CSS']);
});
/* Watch the SCSS -> CSS Task */