//引入依赖
var gulp = require('gulp'),
    fileInclude = require('gulp-file-include'),
    less = require('gulp-less');

//编译less
gulp.task('less',function(){
    gulp.src('less/**.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
});

//复用公共头部和底部
gulp.task('fileInclude',function () {
    // 适配page中所有文件夹下的所有html，排除page下的include文件夹中html
    gulp.src(['page/**/*.html','!page/include/**.html'])
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        // .pipe(gulp.dest('C:/Users/Administrator.USER-20120726XC/Desktop/shengyun')) //输出到同级dist文件夹内
        .pipe(gulp.dest('')) //路径空着，表示输出到同级文件夹内
});

//使用gulp.task('default')定义默认任务
//在命令行使用gulp启动images任务和auto任务
gulp.task('default',['less','fileInclude']);