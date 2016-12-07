var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    plugins = require('gulp-load-plugins')();
    merge = require('merge2');
    CONFIG = require('./gulp.config.js');

gulp.task('build-ts', function() {
    var tsProject = plugins.typescript.createProject(CONFIG.ts.config);

    var tsResult = gulp.src(CONFIG.ts.src)
        .pipe(plugins.sourcemaps.init())
        .pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest(CONFIG.dts.dest)),
        tsResult.js
            .pipe(plugins.sourcemaps.write('.', {sourceRoot: CONFIG.js.srcRoot}))
            .pipe(gulp.dest(CONFIG.js.dest))
        ]);
});

/*gulp.task('bundle', function(){
    return gulp.src(CONFIG.build.src)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat(CONFIG.build.outFile))
        .pipe(gulp.dest(CONFIG.build.dest))
        .pipe(plugins.uglify())
        .pipe(plugins.rename({ extname: '.min.js' }))
        .pipe(plugins.sourcemaps.write(CONFIG.build.maps))
        .pipe(gulp.dest(CONFIG.build.dest))
});*/

gulp.task('watch', function(){
    gulp.watch(CONFIG.ts.src, ['build-ts']);
});

gulp.task('build', function(done) {
    runSequence('build-ts', done);
});