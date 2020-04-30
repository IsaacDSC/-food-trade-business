const express = require('express')
const router = express.Router()

//add models HeaderNav
const HeaderNav = require('../models/HeaderNav')
    //add models PagHome_slideshow
const PagHome_slideshow = require('../models/PagHome_Slideshow')
    // add models Footer
const Footer_models = require('../models/Footer_models')
    // add models HistoryHome
const Hystoryhome_models = require('../models/HistoryHome_models')
    //adionando models do cardapio da pagina home
const CardapioHome_models = require('../models/CardapiosHome_models')
    //adionando Models Menu
const MenuAlmoco = require('../models/MenuAlmoco')
const MenuBebidas = require('../models/MenuBebidas')
const MenuBurger = require('../models/MenuBurger')
const MenuBuger1 = require('../models/MenuBurger1')
const MenuCombos = require('../models/MenuCombos')
const MenuDoces = require('../models/MenuDoces')
const MenuPizza = require('../models/MenuPizza')
const MenuPromocoes = require('../models/MenuProcoes')
const MenuSorvetes = require('../models/MenuSorvetes')

router.get('/', (req, res) => {
    res.render('add_bd/reset', { layout: 'dashboard.handlebars' })
})

router.get('/headernav', (req, res) => {
    HeaderNav.create({
        logotipo: 'images/logotipo.png',
        nav1: 'inicio',
        url_nav1: '/',
        nav2: 'Menu',
        url_nav2: '/menu',
        nav3: 'Paginas',
        subNav3_1: 'Reservas',
        url_subNav3_1: '#',
        subNav3_2: 'Cardapio',
        url_subNav3_2: '#',
        subNav3_3: 'Galeria',
        url_subNav3_3: '#',
        nav4: 'Login',
        nav4_1: 'Acessar Login',
        url_subNav4_1: '/login',
        nav4_2: 'Cadastre-se',
        url_subNav4_2: '/login/register',
        nav5: 'contato',
        urlNav5: '/contato'

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
        title1: 'SOBRE NÓS',
        describe1: 'Integer cursus scelerisque ipsum id efficitur. Donec a dui fringilla, gravida lorem ac, semper magna. Aenean rhoncus ac lectus a interdum. Vivamus semper posuere dui, at ornare turpis ultrices sit amet. Nulla cursus lorem ut nisi porta, ac eleifend arcu ultrices.',
        title2: 'HORÁRIO DE FUNCIONAMENTO',
        Hr_funcionamento: 'De 18 as 00 Hrs',
        status_funcionamento: 'Site disponível 24 horas',
        feriados_funcionamento: 'Funcionamos de Domingo a Domingo',
        title3: 'CONTATO',
        endereco_completo: 'Ipsum Street, Lorem Tower, MO, Columbia, 508000',
        googlemapslocation: 'google maps location5',
        urlMaps: 'https://www.google.com.br/maps/place/R.+Lu%C3%ADs+Valiante+-+Vila+Orlandelia,+Barra+Mansa+-+RJ/@-22.5379816,-44.1607552,17z/data=!3m1!4b1!4m5!3m4!1s0x9e9943c586dfb3:0xd1b8825db54700ed!8m2!3d-22.5377632!4d-44.1585284',
        number: '(XX)000000000',
        url_number: 'https://web.whatsapp.com/',
        email: 'info@admin.com',
        url_email: 'https://outlook.live.com/mail/0/inbox',
        icon_contact1: '',
        url_icon1: '',
        icon_contact2: '',
        url_icon2: '',
        icon_contact3: '',
        url_icon3: '',
        icon_contact4: '',
        url_icon4: '',
        icon_contact5: '',
        url_icon5: '',
        title4: 'CADASTRE E RECEBA AS PROMOSSÕES',
        placeholder: 'SUBSCRIBE',
        titlebtn: 'SUBSCRIBE',
        title5: 'Phone',
        desc1: '+55 0800 4512 3254',
        imgIcon1: '',
        title6: 'E-mail',
        desc2: 'seuemail@hotamil.com',
        imgIcon2: '',
        title7: 'Localização',
        desc3: 'seuemail@hotamil.com',
        imgIcon3: 'rua: x | n°: 0000 | Bairro | Cidade/Rj | Cep: 00000-000'

    }).then(() => {
        res.send('Pagina Resetada Com Sucesso!')
    }).catch((err) => {
        res.send('Error ao Resetar: ' + err)
    })
})

router.get('/history', (req, res) => {
    Hystoryhome_models.create({
        title1: 'Bem vindo ao',
        title2: 'Site Burguer',
        subtitle: 'Little Story',
        paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem.',
        paragraph2: 'Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.',
        images: '/images/about-img.jpg',
        btnTitle: 'DELIVERY',
        url_btn: '/menu',
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
        nav3: 'LANCHES',
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
        nav4: 'COMBOS',
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