var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var cssimport = require("gulp-cssimport");
var reload = browserSync.reload;


gulp.task('serve', function(){

	browserSync.init({
		server: './public'
	});

	gulp.watch('./assets/less/*', ['less']).on('change', reload);
	gulp.watch('./assets/views/*', ['pug']).on('change', reload);
});

gulp.task('less', function(){
	return gulp.src('./assets/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('./public'))
		.pipe(browserSync.stream());
});


gulp.task('pug', function(){
	return gulp.src('./assets/views/*.pug')
	.pipe(pug({pretty: true}))
	.pipe(gulp.dest('./public'))
	.pipe(browserSync.stream());
});


gulp.task('default',['serve']);
