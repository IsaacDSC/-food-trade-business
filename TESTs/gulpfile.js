var gulp = require('gulp')
var less = require('gulp-less')
var concat = require('gulp-concat')

gulp.task('compilar.-js', function() {
    return gulp.src(['*.js', 'js/*.js'])
        .pipe(js().on('err'), function(err) {
            console.log(err)
        })
        .pipe(concat('style.css'))
        .
})
gulp.task('monitorar', function() {
    gulp.watch(['*.js', 'js/*.js'], gulp.series('compilar-js'))
})
gulp.task('default', gulp.series('monitorar'))