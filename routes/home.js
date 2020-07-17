const express = require('express')
const router = express.Router()
    //require('../public/js/marketingDirecionado')

const DataUsers = require('../models/DataUsers')

/*for (dataUser of dataUsers) {
    DataUsers.create({
        visitas: dataUser.visitas
    })
}*/

//adionando models para carregamento da pagina home via db
const HeaderNav = require('../models/HeaderNav')
const PagHome_Slideshow = require('../models/PagHome_Slideshow')
const HistoryHome = require('../models/HistoryHome_models')
const CardapiosHome = require('../models/CardapiosHome_models')
const Footer = require('../models/Footer_models')

router.get('/', (req, res) => {
    HeaderNav.findOne().then((nav) => {
        PagHome_Slideshow.findOne().then((slideshow) => {
            HistoryHome.findOne().then((hisHome) => {
                CardapiosHome.findOne().then((cardHome) => {
                    Footer.findOne().then((footer) => {
                        res.render('home/home', { nav: nav, slideshow: slideshow, hisHome: hisHome, cardHome: cardHome, footer: footer })
                    })
                })
            })
        })
    }).catch((err) => {
        res.send('Erro ao carregar a pagina porfavor entre em contato com o Administrador do site!')
    })

})

module.exports = router