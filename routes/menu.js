const express = require('express')
const router = express.Router()

//adionando models para carregar table para rotas menu
const HeaderNav = require('../models/HeaderNav')
const Footer = require('../models/Footer_models')
const MenuBurger = require('../models/MenuBurger')
const MenuBebidas = require('../models/MenuBebidas')

router.get('/', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        Footer.findOne().then((footer) => {
            MenuBurger.findOne().then((burger) => {
                MenuBebidas.findOne().then((bebidas) => {

                    res.render('menu/menu', { nav: nav, footer: footer, burger: burger, bebidas: bebidas })
                })
            })
        })
    })
})

module.exports = router