const express = require('express')
const router = express.Router()

//adionando models para carregar table para rotas menu
const HeaderNav = require('../models/HeaderNav')
const Footer = require('../models/Footer_models')
const MenuBurger = require('../models/MenuBurger')
const MenuBebidas = require('../models/MenuBebidas')
const MenuPizzas = require('../models/MenuPizza')
    //const Pedidos = require('../models/Pedidos')

var pedido = []

router.get('/', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        Footer.findOne().then((footer) => {
            MenuBurger.findOne().then((burger) => {
                res.render('menu/burger', { layout: 'menu.handlebars', nav: nav, footer: footer, burger: burger, pedido: pedido })
            })
        })
    })
})
router.get('/bebidas', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        Footer.findOne().then((footer) => {
            MenuBebidas.findOne().then((bebidas) => {
                res.render('menu/bebidas', { layout: 'menu.handlebars', nav: nav, footer: footer, bebidas: bebidas, pedido: pedido })

            })
        })
    })
})


router.get('/pizza', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        Footer.findOne().then((footer) => {
            MenuPizzas.findOne().then((pizza) => {
                res.render('menu/pizzas', { layout: 'menu.handlebars', nav: nav, footer: footer, pizza: pizza })
            })
        })
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
        res.redirect('/menu')
            //console.log(pedido[0]['title'])

    }
})



module.exports = router