var gulp = require('gulp'),
    inject = require('gulp-inject'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    es = require('event-stream'),
    bowerFiles = require('main-bower-files');

gulp.task('scripts', function() {
    gulp.src('bower_components/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('.'))
        .pipe(uglify())
        .pipe(gulp.dest('.'))
});


gulp.task('inject', function() {
    gulp.src('./public/index.html')
        .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower', relative: true}))
        .pipe(inject(es.merge(gulp.src('./public/js/**/*.js', {read: false})), {relative: true}))
        .pipe(gulp.dest('./public/'));

});