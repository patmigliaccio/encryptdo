var CONFIG = {
    ts: {
        config: 'tsconfig.json',
        src: 'src/**/*.ts'
    },
    dts: {
        dest: 'dist/definitions'
    },
    js: {
        dest: 'dist/build',
        maps: 'maps'
    },
/*    build: {
        src: 'dist/js/!**!/!*.js',
        dest: 'dist/build',
        maps: 'maps',
        outFile: 'app.js'
    }*/
};

module.exports = CONFIG;