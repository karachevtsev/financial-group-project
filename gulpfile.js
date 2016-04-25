global.hostname = 'localhost';

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename');

gulp.task('express', function() {
	var express = require('express');
	var build   = express();
	build.use(require('connect-livereload')({port: 35729}));
	build.use(express.static(__dirname + '/build'));
	build.listen('80', hostname);
});

var tinylr;
gulp.task('livereload', function() {
	tinylr = require('tiny-lr')();
	tinylr.listen(35729);
});

function notifyLiveReload(event) {
	var fileName = require('path').relative(__dirname, event.path);
	tinylr.changed({
		body: {
			files: [fileName]
		}
	});
}

gulp.task('styles', function () {
	gulp.src('sass/main.sass')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min'}))
	.pipe(autoprefixer({
		browsers: ['last 15 versions'],
		cascade: false
	}))
	.pipe(minifycss())
	.pipe(gulp.dest('build/css'));
});

// gulp.task('jsbuild', function () {
//     gulp.src('js/main.js') //Найдем наш main файл
//         .pipe(uglify()) //Сожмем наш js
//         .pipe(sourcemaps.write()) //Пропишем карты
//         .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
//         .pipe(reload({stream: true})); //И перезагрузим сервер
// });

gulp.task('compress', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/js'));
});


gulp.task('watch', function() {
	gulp.watch('sass/*.sass', ['styles']);
	gulp.watch('build/css/*.css', notifyLiveReload);
	gulp.watch('build/*.html', notifyLiveReload);
    gulp.watch('build/js/*.js', notifyLiveReload);
});

gulp.task('default', ['styles', 'compress', 'express', 'livereload', 'watch'], function() {

});
