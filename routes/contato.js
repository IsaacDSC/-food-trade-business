const express = require('express')
const router = express.Router()

//add models
const Headernav = require('../models/HeaderNav')
const Footer = require('../models/Footer_models')


router.get('/', (req, res) => {
    Headernav.findOne().then((nav) => {
        Footer.findOne().then((footer) => {
            res.render('contato/contato', { nav: nav, footer: footer })
        })
    })
})

module.exports = router