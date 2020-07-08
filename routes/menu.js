const express = require('express')
const router = express.Router()

//adionando models para carregar table para rotas menu
const HeaderNav = require('../models/HeaderNav')
const Footer = require('../models/Footer_models')
const MenuBurger = require('../models/MenuBurger')
const MenuBebidas = require('../models/MenuBebidas')
const MenuPizzas = require('../models/MenuPizza')
    //const Pedidos = require('../models/Pedidos')

var pedidos = []


const SubTotal = pedidos.reduce((subtotal, pedido) => pedido.valor + subtotal, 0)
console.log(SubTotal)

router.get('/', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        Footer.findOne().then((footer) => {
            MenuBurger.findOne().then((burger) => {
                const subTotal = pedidos.reduce((subtotal, pedido) => pedido.valor + subtotal, 0)
                console.log(subTotal)
                res.render('menu/burger', { layout: 'menu.handlebars', nav: nav, footer: footer, burger: burger, pedidos: pedidos, subTotal: subTotal })
            })
        })
    })
})


router.post('/add', (req, res) => {

    //var quantidade = pedido.length + 1
    pedidos.push({ title: req.body.title, valor: req.body.valor })
    if (pedidos == null || pedidos == undefined) {
        res.send('pedido undefined ou null')
    } else {
        //res.send(pedido)        
        res.redirect('/menu')
    }
})

router.get('/bebidas', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        Footer.findOne().then((footer) => {
            MenuBebidas.findOne().then((bebidas) => {
                const subTotal = pedidos.reduce((subtotal, pedido) => pedido.valor + subtotal, 0)
                res.render('menu/bebidas', { layout: 'menu.handlebars', nav: nav, footer: footer, bebidas: bebidas, pedidos: pedidos, subTotal: subTotal })

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







module.exports = router