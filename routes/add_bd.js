const express = require('express')
const router = express.Router()

//add models HeaderNav
const HeaderNav = require('../models/HeaderNav')
    //add models PagHome_slideshow
const PagHome_slideshow = require('../models/PagHome_Slideshow')
    // add models Footer
const Footer_models = require('../models/Footer_models')
    // add models HistoryHome
const Hystoryhome_models = require('../models/HistoyHome_models')
    //adionando models do cardapio da pagina home
const CardapioHome_models = require('../models/CardapiosHome_models')

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

router.get('/footer', (req, res) => {
    Footer_models.create({
        title_sobre: 'ABOUT US',
        describe_sobre: 'Integer cursus scelerisque ipsum id efficitur. Donec a dui fringilla, gravida lorem ac, semper magna. Aenean rhoncus ac lectus a interdum. Vivamus semper posuere dui, at ornare turpis ultrices sit amet. Nulla cursus lorem ut nisi porta, ac eleifend arcu ultrices.',
        title_funcionamento: 'HORÁRIO DE FUNCIONAMENTO',
        Hr_funcionamento: 'De 18 as 00 Hrs',
        status_funcionamento: 'Site disponível 24 horas',
        feriados_funcionamento: 'Funcionamos de Domingo a Domingo',
        endereço_completo: 'Ipsum Street, Lorem Tower, MO, Columbia, 508000',
        googlemapslocation: 'google maps location',
        number_email: '(XX)000000000 - info@admin.com',
        icon_contact1: '',
        icon_contact2: '',
        icon_contact3: '',
        icon_contact4: '',
        icon_contact5: '',
        title_recEmail: 'CADASTRE E RECEBA AS PROMOSSÕES',
        placeholder_subcribe: 'SUBSCRIBE',
        title_btn_subscribe: 'SUBSCRIBE'

    }).then(() => {
        res.send('Pagina Resetada Com Sucesso!')
    }).catch((err) => {
        res.send('Error ao Resetar: ' + err)
    })
})

router.get('/hystory', (req, res) => {
    Hystoryhome_models.create({
        title1: 'Bem vindo ao',
        title2: 'Site Burguer',
        subtitle: 'Little Story',
        paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem.',
        paragraph2: 'Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.',
        images: '/images/about-img.jpg',
        btnTile: 'DELIVERY',
        url_btn: '/sobre',
        vision_mission: '" Visão e missão da empresa..... "',
        author: 'Site Burguer',

    }).then(() => {
        res.send('Pagina Resetada Com Sucesso!')
    }).catch((err) => {
        res.send('Error ao Resetar: ' + err)
    })
})

router.get('/cardapiohome', (req, res) => {
    CardapioHome_models.create({
        title: 'Promoções do Cardápio',
        subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        nav2: 'BEBIBDAS',
        url2: '.drinks',
        img_item2_1: 'img-01.jpg',
        title_item2_1: 'Mantiqueira 2L',
        desc_item2_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor_item2_1: ' R$ 8,00',
        img_item2_2: 'img-02.jpg',
        title_item2_2: 'Coca Lata',
        desc_item2_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor_item2_2: ' R$ 5,00',
        img_item2_3: 'img-03.jpg',
        title_item2_3: 'Ativ plus',
        desc_item2_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor_item2_3: ' R$ 2,00',
        url3: '.lunch',
        img_item3_1: 'img-04.jpg',
        title_item3_1: 'Special Lunch 1',
        desc_item3_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor_item3_1: ' R$ 2,00',
        img_item3_2: 'img-05.jpg',
        title_item3_2: 'Special Lunch 2',
        desc_item3_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor_item3_2: ' R$ 2,00',
        img_item3_3: 'img-06.jpg',
        title_item3_3: 'Special Lunch 3',
        desc_item3_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor_item3_3: ' R$ 2,00',
        url4: '.dinner',
        img_item4_1: 'img-07.jpg',
        title_item4_1: 'Special Dinner 1',
        desc_item4_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor_item4_1: ' R$ 2,00',
        img_item4_2: 'img-08.jpg',
        title_item4_2: 'Special Dinner 2',
        desc_item4_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor_item4_2: ' R$ 2,00',
        img_item4_3: 'img-09.jpg',
        title_item4_3: 'Special Dinner 3',
        desc_item4_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        valor_item4_3: ' R$ 2,00',
    }).then(() => {
        res.send('Pagina Resetada Com Sucesso!')
    }).catch((err) => {
        res.send('Erro ao Resetar Pagina : ' + err)
    })
})


module.exports = router