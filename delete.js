const fs = require('fs')
const caminho = './public/images/'
const arquivo = './21.jpg'


try {
    fs.unlinkSync(caminho + arquivo)
} catch (err) {
    console.log(err)
}