const express = require('express')
const router = express.Router()

//adionando models para carregar table para rotas menu
const HeaderNav = require('../models/HeaderNav')
const Footer = require('../models/Footer_models')
const Menu = require('../models/Menu')
const TemplateMenu = require('../models/TemplatesMenu')

const MenuBurger = require('../models/MenuBurger')
const MenuBebidas = require('../models/MenuBebidas')
const MenuPizzas = require('../models/MenuPizza')
    //const Pedidos = require('../models/Pedidos')

var pedidos = []

//const SubTotal = pedidos.reduce((subtotal, pedido) => pedido.valor + subtotal, 0)
//console.log(typeof SubTotal)

router.get('/', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        Footer.findOne().then((footer) => {
            Menu.findAll({ where: { class: 'Hamburgue' } }).then((Burger) => {
                TemplateMenu.findOne({ where: { class: 'Hamburgue' } }).then((TemplateBurger) => {
                    const subTotal = pedidos.reduce((subtotal, pedido) => parseFloat(pedido.valor) + subtotal, 0)
                    res.render('menu/burger', { layout: 'menu.handlebars', nav: nav, footer: footer, Burger: Burger, pedidos: pedidos, subTotal: subTotal, TemplateBurger: TemplateBurger })
                })
            })
        })
    })
})


router.post('/add', (req, res) => {
    if (req.body.title == undefined || req.body.title == null || req.body.valor == undefined || req.body.valor == null) {
        res.send('null or undefined')
    }
    if (pedidos == null || pedidos == undefined) {
        res.send('pedido undefined ou null')
    } else {
        const Nvalor = parseFloat(req.body.valor)
        pedidos.push({ title: req.body.title, valor: Nvalor })
        req.flash('success_msg', 'Compra Adionanda ao Carrinho com Sucesso!')
        res.redirect('/menu')
    }
})

router.get('/bebidas', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        Footer.findOne().then((footer) => {
            Menu.findAll({ where: { class: 'Bebidas' } }).then((bebidas) => {
                const subTotal = pedidos.reduce((subtotal, pedido) => pedido.valor + subtotal, 0)
                res.render('menu/bebidas', { layout: 'menu.handlebars', nav: nav, footer: footer, bebidas: bebidas, pedidos: pedidos, subTotal: subTotal })
            })
        })
    })
})


router.get('/pizza', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        Footer.findOne().then((footer) => {
            Menu.findAll({ where: { class: 'Pizza' } }).then((pizzas) => {
                TemplateMenu.findOne({ where: { class: 'Pizza' } }).then((TemplatePizza) => {
                    res.render('menu/pizzas', { layout: 'menu.handlebars', nav: nav, footer: footer, pizzas: pizzas, TemplatePizza: TemplatePizza })
                })
            })
        })
    })
})

router.get('/pedido', (req, res) => {
    res.render('menu/pedido', { layout: 'main.handlebars' })
})

module.exports = router