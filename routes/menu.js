const express = require('express')
const router = express.Router()

//adionando models para carregar table para rotas menu
const HeaderNav = require('../models/HeaderNav')
const Footer = require('../models/Footer_models')
const MenuBurger = require('../models/MenuBurger')
const MenuBebidas = require('../models/MenuBebidas')
    //recebendo dados teste
const Pedidos = require('../models/Pedidos')

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
router.get('/pedidos', (req, res) => {
    Pedidos.create({
        burger1: req.body.burger1_1,
        burger1_2: req.body.burger1_2,
        burger1_3: req.body.burger1_3,
        burger1_4: req.body.burger1_4,
        burger1_5: req.body.burger1_5,

    }).then(() => {
        res.send('enviado com sucesso!')
    }).catch((err) => {
        res.send(' error> ' + err)
    })
})

module.exports = router