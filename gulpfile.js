const sass = require('gulp-sass');
const concat = require('gulp-concat');
const {dest,src,series,watch} = require('gulp');
const imagemin = require('gulp-imagemin');

const paths = {
    scss: 'src/scss/**/*.scss',
    img: 'src/img/**/*',
    js: 'src/js/**/*.js'
}

css = () => {
    return src(paths.scss)
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))
}

cssMin = () => {
    return src(paths.scss)
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))
}

imagenes = () => {
    return src(paths.img)
        .pipe(imagemin())
        .pipe(dest('./build/img'))
}

js = () => {
    return src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(dest('./build/js'))
}

watchArchivos = () => {
    watch(paths.js, js);
    watch(paths.scss, css);
}

exports.css = css;
exports.js = js;
exports.watchArchivos = watchArchivos;
exports.imagenes = imagenes;
exports.cssMin = cssMin;

exports.default = series(imagenes,css,js,watchArchivos);
