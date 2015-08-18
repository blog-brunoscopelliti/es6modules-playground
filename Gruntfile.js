module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        connect: {
            options: {
                base: './',
                hostname: '127.0.0.1',
                keepalive: true,
                protocol: 'http',
                port: 8081
            },
            dev: {
                open: true
            }
        }
    });

    grunt.registerTask('launch', ['connect:dev']);

};