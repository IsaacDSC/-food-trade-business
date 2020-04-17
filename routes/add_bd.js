const express = require('express')
const router = express.Router()

//add models HeaderNav
const HeaderNav = require('../models/HeaderNav')
    //add models PagHome_slideshow
const PagHome_slideshow = require('../models/PagHome_Slideshow')

router.get('/headernav', (req, res) => {
    HeaderNav.create({
        logotipo: 'images/logotipo.png',
        nav1: 'inicio',
        url_nav1: '/',
        nav2: 'Menu',
        url_nav2: '/menu',
        nav3: 'sobre',
        url_nav3: '/sobre',
        nav4: 'Paginas',
        subNav4_1: 'Reservas',
        url_subNav4_1: '#',
        subNav4_2: 'Cardapio',
        url_subNav4_2: '#',
        subNav4_3: 'Galeria',
        url_subNav4_3: '#',
        nav5: 'Blog',
        nav5_1: 'blog',
        url_subNav5_1: '#',
        nav5_2: 'Blog Single',
        url_subNav5_2: '#',
        nav6: 'contato',
        urlNav6: '/contato'

    }).then(() => {
        res.send('Pagina Resetada Com Sucesso!')
    }).catch((err) => {
        res.send('Error ao resetar: ' + err)
    })
})

router.get('/homeslideshow', (req, res) => {
    PagHome_slideshow.create({
        img1: 'images/slider-01.jpg',
        title1_1: 'Bem vindo ao ',
        title1_2: ' Site Burguer',
        text1_1: 'Texto base usado para o produto.  Texto usado para conseguir a atenção do cliente',
        text1_2: 'Texto usado para conseguir a atenção do cliente',
        btn1: 'Delivery',
        urlbtn1: '/menu',
        img2: 'images/slider-02.jpg',
        title2_1: 'Bem vindo ao ',
        title2_2: ' Site Burguer',
        text2_1: 'Texto base usado para o produto.  Texto usado para conseguir a atenção do cliente',
        text2_2: 'Texto usado para conseguir a atenção do cliente',
        btn2: 'Delivery',
        urlbtn2: '/menu',
        img3: 'images/slider-03.jpg',
        title3_1: 'Bem vindo ao ',
        title3_2: ' Site Burguer',
        text3_1: 'Texto base usado para o produto.  Texto usado para conseguir a atenção do cliente',
        text3_2: 'Texto usado para conseguir a atenção do cliente',
        btn3: 'Delivery',
        urlbtn3: '/menu',
        iconbtnNext: 'fa fa-angle-right',
        iconbtnPrev: 'fa fa-angle-left'
    }).then(() => {
        res.send('Pagina Resetada Com Sucesso!')
    }).catch((err) => {
        res.send('Error ao resetar: ' + err)
    })
})

module.exports = router