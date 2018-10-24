//引入依赖
var gulp = require('gulp'),
    fileInclude = require('gulp-file-include'),
    less = require('gulp-less'),
    connect = require('gulp-connect');

gulp.task('server',function () {
    connect.server({
        port:8060,
        livereload:true
    })
});

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
        .pipe(gulp.dest('dist')) //路径空着，表示输出到同级文件夹内
});

//监听任务，gulp.watch()监听文件，当文件变化后执行对应任务
gulp.task('watch',function () {
    gulp.watch('**/*.html*',['fileInclude']);
    gulp.watch('less/**/*.less',['less']);
    gulp.watch('js/**/*.js',['fileInclude']);
});

gulp.task('default',['server','watch']);