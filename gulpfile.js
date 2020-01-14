
// const html = require('gulp-minify-html'); //引入gulp下面的gulp-minify-html包
// gulp.task('runhtml', function () {
//     return gulp.src('src/*.html')
//         .pipe(html()) //调用模块或者包
//         .pipe(gulp.dest('./dist/'));
// });

const gulp = require('gulp'); //引入gulp模块
const css = require('gulp-minify-css'); //引入sass编译包。
gulp.task('runcss',function(){
    return gulp.src('./dist/style/*.css')
    .pipe(css())
    .pipe(gulp.dest('./dist/css'));
    
})