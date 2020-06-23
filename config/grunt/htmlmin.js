module.exports = {
    default: {
        files: [
            {
                cwd: 'build/web-audio-conference-2018',
                dest: 'build/web-audio-conference-2018',
                expand: true,
                src: ['**/*.html']
            }
        ],
        options: {
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeComments: true
        }
    }
};
