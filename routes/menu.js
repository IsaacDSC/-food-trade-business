const express = require('express')
const router = express.Router()

//adionando models para carregar table para rotas menu
const HeaderNav = require('../models/HeaderNav')
const Footer = require('../models/Footer_models')
const MenuBurger = require('../models/MenuBurger')
const MenuBebidas = require('../models/MenuBebidas')
const Pedidos = require('../models/Pedidos')


router.get('/', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        Footer.findOne().then((footer) => {
            MenuBurger.findOne().then((burger) => {
                MenuBebidas.findOne().then((bebidas) => {
                    Pedidos.findOne().then((pedido) => {

                        res.render('menu/menu', { nav: nav, footer: footer, burger: burger, bebidas: bebidas, pedido: pedido })
                    })
                })
            })
        })
    })
})
router.post('/pedidos', (req, res) => {
    Pedidos.create({
        codigo: req.body.codigo,
        nome: req.body.nome,
        quantidade: req.body.quantidade,
        valor: req.body.valor,
        status: req.body.status

    }).then(() => {
        res.send('enviado com sucesso!')
    }).catch((err) => {
        res.send(' error> ' + err)
    })
})

module.exports = router