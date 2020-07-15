const fs = require('fs')
const folder = 'public/images/'

fs.readdir(folder, (err, paths) => {
    console.log(paths.length)
    console.log(paths.length + 1)
    console.log(paths)
})