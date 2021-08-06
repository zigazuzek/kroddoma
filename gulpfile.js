const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style(){
    return gulp.src(['src/scss/style.scss','node_modules/bootstrap/scss/bootstrap.scss', 'node_modules/aos/dist/aos.css'])
    .pipe(sass())
    .pipe(gulp.dest('src/css/'))
    .pipe(browserSync.stream());
}

function js(){
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js.map','node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js', 'node_modules/aos/dist/aos.js'])
    .pipe(gulp.dest('src/js/'))
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baseDir: 'src/'
        }
    });
    gulp.watch('src/scss/*.scss', style);
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/js/*.js', js).on('change', browserSync.reload);

}

exports.style = style;
exports.js = js;
exports.watch = watch;