module.exports = {
    404: {
        files: [
            {
                cwd: 'src/',
                dest: 'build/web-audio-conference-2018/',
                expand: true,
                src: ['404.html']
            }
        ]
    },
    scripts: {
        files: [
            {
                cwd: 'build/web-audio-conference-2018/',
                dest: 'build/web-audio-conference-2018/scripts/',
                expand: true,
                src: ['**/!(ngsw-worker).js']
            }
        ]
    },
    styles: {
        files: [
            {
                cwd: 'build/web-audio-conference-2018/',
                dest: 'build/web-audio-conference-2018/styles/',
                expand: true,
                src: ['**/*.css']
            }
        ]
    }
};
