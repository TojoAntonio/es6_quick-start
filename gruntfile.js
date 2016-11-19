module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {
                            "presets": ["es2015"]
                        }]
                    ]
                },
                files: {
                    "./dist/module.js": ["./js/index.js"]
                }
            }
        },
        watch: {
            scripts: {
                files: ["./js/*.js"],
                tasks: ["browserify"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["browserify"]);
};