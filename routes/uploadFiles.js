const express = require('express')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const folder = 'public/images/'

//config multer 
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, folder)
    },
    filename: function(req, file, cb) {
        //function para contar arquivos
        fs.readdir(folder, (err, paths) => {
            //def nomes do arquivos
            cb(null, paths.length + 1 + file.originalname)
        })
    }
})

const upload = multer({ storage })



router.get('/', (req, res) => {
    fs.readdir(folder, (err, paths) => {
        res.render('uploadfiles/upLoadFile', { layout: 'dashboard.handlebars', paths: paths, folder: folder })
    })
})

router.post('/upload', upload.single('img'), (req, res) => {
    req.flash('success_msg', 'Imagem enviada com sucesso!')
    res.redirect('/admin')
})

router.post('/files', (req, res) => {
    fs.readdir(folder, (err, paths) => {
        res.render('uploadfiles/viz-file', { layout: 'dashboard.handlebars', file: file, folder: folder })
            //res.send(`<img src="/images/${file}" class="img-fluid" alt="imgs">`)
    })
})



module.exports = router