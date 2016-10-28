var gulp = require('gulp');
var cucumber = require('gulp-cucumber');
var angularProtractor = require('gulp-angular-protractor');
var  util = require('gulp-util');
var exec = require('child-process-promise').exec;


gulp.task("test", function() {
	util.env.browser ? process.env.BROWSER = util.env.browser : process.env.BROWSER = "chrome";
	util.env.tag ? process.env.TAGS = util.env.tag : process.env.TAGS = [];
	return gulp.src(['features/*'])
		.pipe(angularProtractor({
			'configFile': 'conf.js',
			'autoStartStopServer': true,
			'debug': false
		}))
		.on('error', function(e) {
			throw e
		});
});

