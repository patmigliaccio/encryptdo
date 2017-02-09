var CONFIG = {
    ts: {
        config: 'tsconfig.json',
        src: 'src/**/*.ts'
    },
    dts: {
        dest: 'build/definitions'
    },
    js: {
        dest: 'build',
        maps: 'maps'
    }
};

module.exports = CONFIG;