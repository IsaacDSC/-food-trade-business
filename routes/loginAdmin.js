const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('login/loginAdmin', { layout: 'login_register.handlebars' })
})

module.exports = router