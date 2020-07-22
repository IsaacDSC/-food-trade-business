/* const fs = require('fs')
const folder = 'public/images/'

fs.readdir(folder, (err, paths) => {
    console.log(paths.length)
    console.log(paths.length + 1)
    console.log(paths)
}) */


const Burger = require('../models/MenuBurger')
Burger.findOne({ where: { title: title } }).then((burger) => {
    console.log(burger)
}).catch((err) => {
    console.log(err)

})