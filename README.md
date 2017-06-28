# Gulp-Basic
Gulp的基本使用：包括监听，ES6编译，合并压缩等

一、安装gulp

1.先在全局安装gulp
$ npm install --global gulp

2.进入项目目录，安装gulp
$ npm install --save-dev gulp

例如：D:\工作资料\工作项目\newGulp>npm install --save-dev gulp

然后再对应项目目录生成：node_modules

3.安装常用插件：
例如less：D:\工作资料\工作项目\newGulp>npm install gulp-less --save-dev
使用方法：http://www.ydcss.com/archives/34

更多插件使用方法参见：http://www.ydcss.com/archives/tag/gulp


二、将ES6编译成ES5

将ES6编译成ES5：

http://www.tuicool.com/articles/QvIfa2Y

http://www.thinksaas.cn/ask/question/26200/

http://www.07net01.com/2015/09/926960.html

http://www.open-open.com/lib/view/open1454226995448.html


安装以下三个包到项目目录：
npm install gulp-babel --save-dev
npm install babel-core --save-dev
npm install babel-preset-es2015 --save-dev
npm install gulp-babel babel-core babel-preset-es2015 --save-dev


在gulpfile.js中加入以下代码：

//将ES6编译成ES5：

gulp.task("es6Toes5", function () {
    gulp.src("./src/script/**/*.js")
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest("./dist/script"));//编译生成路径
});

三、拷贝文件

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

四、监控改变，监控文件的改变，执行对应的任务：

//定义监控任务

gulp.task('watchTask', function () {
    gulp.watch('./src/**/*.png', ['image']);
    gulp.watch('./src/**/*.jpg', ['image']);
    gulp.watch('./src/**/*.js', ['es6Toes5']);
    gulp.watch('./src/**/*.html', ['html']);
    gulp.watch('./src/**/*.less', ['lessTask']); //当所有less文件发生改变时，调用testLess任务
});

五、配置webstorm

4、在webstorm上配置，参考：http://www.qdfuns.com/notes/19478/7ba7d3f212bee47a4fa0e9f2da253cfb.html

六、合并/压缩JS/CSS/IMG文件

5、合并/压缩JS/CSS/PNG：http://www.gowhich.com/blog/621

压缩图片：http://geek100.com/2684/
