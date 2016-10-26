var gulp = require('gulp');

var cucumber = require('gulp-cucumber');


var angularProtractor = require('gulp-angular-protractor');


gulp.task("test", function() {
	return gulp.src(['./src/tests/*.js'])
		.pipe(angularProtractor({
			'configFile': 'conf.js',
			'autoStartStopServer': true,
			'debug': false
		}))
		.on('error', function(e) {
			throw e
		});
});