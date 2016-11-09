var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            browser: ["google chrome"]
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});
