var gulp = require("gulp");
var cssClean = require("gulp-clean-css");//压缩css
var jshint = require("gulp-jshint");//语法错误
var uglify = require("gulp-uglify");//压缩js
var concat = require("gulp-concat");//合并
var rename = require("gulp-rename");//重命名

gulp.task("default",function(){

});

gulp.task("cleanCss",function(){
	gulp.src("css/index.css")
		.pipe(cssClean())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest("build/css"));
});

gulp.task("cleanJs",function(){
	gulp.src("js/*.js")
		.pipe(concat("index.js"))
		.pipe(uglify())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('build/js'));
});