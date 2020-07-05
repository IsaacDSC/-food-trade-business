const express = require('express')
const router = express.Router()

//adionando models para carregar table para rotas menu
const HeaderNav = require('../models/HeaderNav')
const Footer = require('../models/Footer_models')
const MenuBurger = require('../models/MenuBurger')
const MenuBebidas = require('../models/MenuBebidas')
    //const Pedidos = require('../models/Pedidos')

var pedido = []

router.get('/', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        Footer.findOne().then((footer) => {
            MenuBurger.findOne().then((burger) => {
                MenuBebidas.findOne().then((bebidas) => {

                    res.render('menu/menu', { nav: nav, footer: footer, burger: burger, bebidas: bebidas, pedido: pedido })

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

router.post('/add', (req, res) => {
    pedido.push({
        title: req.body.title,
        desc: req.body.desc,
        valor: req.body.valor
    })
    if (pedido == null || pedido == undefined) {
        res.send('pedido undefined ou null')
    } else {
        //res.send(pedido)

    }
})



module.exports = router