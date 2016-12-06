const gulp = require('gulp'),
        plugins = require('gulp-load-plugins')();

const assets = {
    scripts: {
        src: './src/**/*.js',
        outFile: 'app.js',
        outDir: './dist',
        mapsDir: './maps'
    }
};

gulp.task('bundle', function(){
    return gulp.src(assets.scripts.src)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.babel())
        .pipe(plugins.concat(assets.scripts.outFile))
        .pipe(gulp.dest(assets.scripts.outDir))
        .pipe(plugins.uglify())
        .pipe(plugins.rename({ extname: '.min.js' }))
        .pipe(plugins.sourcemaps.write(assets.scripts.mapsDir))
        .pipe(gulp.dest(assets.scripts.outDir))
});

gulp.task('watch', function(){
    gulp.watch(assets.scripts.src, ['build']);
});

gulp.task('build', ['bundle']);