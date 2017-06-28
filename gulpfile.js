
/*
 * 使用less前先安装:
 * 使用es5编译工具前先安装:npm install gulp-babel babel-core babel-preset-es2015 --save-dev
 */

//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    babel = require("gulp-babel");



//将ES6编译成ES5：
gulp.task("es6Toes5", function () {
    gulp.src("./src/script/**/*.js")
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest("./dist/script"));
});




//定义一个testLess任务（自定义任务名称）
gulp.task('lessTask', function () {
    //编译src目录下的所有less文件
    //查找less规则：除了reset.less和test.less（**匹配src/less的0个或多个子文件夹）
    gulp.src(['./src/style/*.less', '!src/style/**/{reset,test}.less'])
        .pipe(less())
        .pipe(gulp.dest('./dist/style'));//编译生成路径
});



//拷贝HTML
gulp.task('html', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('./dist'));
});



//拷贝Image
gulp.task('image', function() {
    gulp.src('src/style/images/**')
        .pipe(gulp.dest('./dist/style/images'));
});



//定义监控任务
gulp.task('watchTask', function () {
    gulp.watch('./src/**/*.png', ['image']);
    gulp.watch('./src/**/*.jpg', ['image']);
    gulp.watch('./src/**/*.js', ['es6Toes5']);
    gulp.watch('./src/**/*.html', ['html']);
    gulp.watch('./src/**/*.less', ['lessTask']); //当所有less文件发生改变时，调用testLess任务
});



//定义默认任务
gulp.task('default',['html', 'image', 'lessTask', 'es6Toes5', 'watchTask']);

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径

