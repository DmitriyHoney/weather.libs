var gulp 				= require('gulp'),
		sass 				= require('gulp-sass'),
		browserSync = require('browser-sync'),
		del 				= require('del'),
		imagemin    = require('gulp-imagemin'),
		pngquant    = require('imagemin-pngquant');


gulp.task('sass', function(){
	return gulp.src('app/scss/*.scss')
	.pipe(sass())
	.pipe(browserSync.reload({stream: true}))
	.pipe(gulp.dest('app/css'))
});

gulp.task('browser-sync', function() {
	browserSync.init({
			server: {
					baseDir: "app"
			}
	});
});

gulp.task('build', ['clean', 'img', 'sass'], function(){

	var buildCss = gulp.src([
		'app/css/*.css'
	])
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src([
		'app/fonts/**/*'
	])
	.pipe(gulp.dest('dist/fonts'));

	var buildHtml = gulp.src([
		'app/*.html'
	])
	.pipe(gulp.dest('dist'));

	var buildJs = gulp.src([
		'app/js/*.js'
	])
	.pipe(gulp.dest('dist/js'));

	var buildAwesome = gulp.src([
		'app/fontawesome/*/**'
	])
	.pipe(gulp.dest('dist/fontawesome'));

});

gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('img', function() {

	return gulp.src('app/img/**/*')
	.pipe(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	}))
	.pipe(gulp.dest('dist/img'))
});

gulp.task('watch', ['sass', 'browser-sync'], function(){
	gulp.watch('app/scss/*.scss', ['sass']);
	gulp.watch('app/js/*.js', browserSync.reload);
	gulp.watch('app/*.html', browserSync.reload);
});