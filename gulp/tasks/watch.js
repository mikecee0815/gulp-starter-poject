var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

// This task will trigger all other tasks...
gulp.task('watch',function(){
	
	browserSync.init({
		notify:false,
		server: {
		    baseDir: "app"
		}
	});

	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('cssInject');
	});
	watch('./app/index.html',function(){
		browserSync.reload();
	});
});

gulp.task('cssInject', ['styles'] , function(){
	return gulp.src('./app/assets/temp/styles/styles.css')
	.pipe(browserSync.stream());
});

