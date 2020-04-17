const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('pagina de menus')
})

module.exports = router