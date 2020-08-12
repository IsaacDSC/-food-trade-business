//adionando arquivos para teste
const addBd = require('../routes/addBd')

module.exports = function(grunt) {
    grunt.registerTask(addBd, function() {
        console.log('file one')
    })

    grunt.registerTask('default', [addBd])
}