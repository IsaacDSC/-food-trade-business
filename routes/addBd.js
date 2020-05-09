const express = require('express')
const router = express.Router()

//adionando models
const HeaderNav = require('../models/HeaderNav')
const pagHome_slideshow = require('../models/PagHome_Slideshow')
const History = require('../models/HistoryHome_models')
const Footer = require('../models/Footer_models')


router.post('/headernav', (req, res) => {
    HeaderNav.findOne({ id: req.body.id }).then((nav) => {
        nav.logotipo = req.body.logotipo,
            nav.nav1 = req.body.nav1,
            nav.url_nav1 = req.body.url_nav1,
            nav.nav2 = req.body.nav2,
            nav.url_nav2 = req.body.url_nav2,
            nav.nav3 = req.body.nav3,
            nav.subNav3_1 = req.body.subNav3_1
        nav.url_subNav3_1 = req.body.url_subNav3_1,
            nav.subNav3_2 = req.body.subNav3_2
        nav.url_subNav3_2 = req.body.url_subNav3_2,
            nav.subNav3_3 = req.body.subNav3_3,
            nav.url_subNav3_3 = req.body.url_subNav3_3
        nav.nav4 = req.body.nav4,
            nav.nav4_1 = req.body.nav4_1,
            nav.url_subNav4_1 = req.body.url_subNav4_1,
            nav.nav4_2 = req.body.nav4_2,
            nav.url_subNav4_2 = req.body.url_subNav4_2,
            nav.nav5 = req.body.nav5,
            nav.urlNav5 = req.body.urlNav5

        nav.save().then(() => {
            req.flash('success_msg', 'Pagina Editada com Sucesso!')
            res.redirect('/visAdmin/vis-headernav')
        }).cath((err) => {
            req.flash('error_msg', ' error: EEN-1001')
            res.send('Erro ao Editar:  ' + err)
        })
    })
})

router.post('/slideshow', (req, res) => {
    pagHome_slideshow.findOne({ id: req.body.id }).then((slideshow) => {
        //primeira parte do form
        slideshow.title1_1 = req.body.title1_1,
            slideshow.title1_2 = req.body.title1_2,
            slideshow.text1_1 = req.body.text1_1,
            slideshow.text1_2 = req.body.text1_2,
            slideshow.btn1 = req.body.btn1,
            slideshow.urlbtn1 = req.body.urlbtn1,
            //segunda parte do form
            slideshow.title2_1 = req.body.tite2_1,
            slideshow.title2_2 = req.body.title2_2,
            slideshow.text2_1 = req.body.text2_1,
            slideshow.text2_2 = req.body.text2_2,
            slideshow.btn2 = req.body.btn2,
            slideshow.urlbtn2 = req.body.urlbtn2,
            //terceira parte do form
            slideshow.title3_1 = req.body.title3_1,
            slideshow.title3_2 = req.body.title3_2,
            slideshow.text3_1 = req.body.text3_1,
            slideshow.text3_2 = req.body.text3_2,
            slideshow.btn3 = req.body.btn3,
            slideshow.urlbtn3 = req.body.urlbtn3,
            //quarta parte do form
            slideshow.iconbtnNext = req.body.iconbtnNext,
            slideshow.iconbtnPrev = req.body.iconbtnPrev

        //editando com a route slideshow
        slideshow.save().then(() => {
            res.send('Editado com Sucesso!')
        }).cath((err) => {
            res.send('Error ao Editar: ' + err)
        })
    })
})

router.post('/history', (req, res) => {
    History.findOne({ id: req.body.id }).then((history) => {
        history.title1 = req.body.title1,
            history.title2 = req.body.title2,
            history.subtitle = req.body.subtitle,
            history.paragraph1 = req.body.paragraph1,
            history.paragraph2 = req.body.paragraph2,
            history.btnTitle = req.body.btnTitle,
            history.url_btn = req.body.vision_mission,
            history.author = req.body.author

        history.save().then(() => {
            res.send('Editado com Sucesso!')
        }).catch((err) => {
            res.send('Error ao Editar ' + err)
        })

    })
})

router.post('/footer', (req, res) => {
    Footer.findOne({ id: req.body.id }).then((footer) => {
        footer.title1 = req.body.title1,
            footer.describe1 = req.body.describe1,
            footer.Hr_funcionamento = req.body.Hr_funcionamento,
            footer.status_funcionamento = req.body.status_funcionamento,
            footer.feriados_funcionamento = req.body.feriados_funcionamento,
            footer.title3 = req.body.title3,
            footer.endereco_completo = req.body.endereco_completo,
            footer.googlemapslocation = req.body.googlemapslocation,
            footer.urlMaps = req.body.urlMaps,
            footer.number = req.body.number,
            footer.url_number = req.body.url_number,
            footer.email = req.body.email,
            footer.url_email = req.body.email,
            footer.icon_contact1 = req.body.icon_contact1,
            footer.url_icon1 = req.body.url_icon1,
            footer.icon_contact2 = req.body.icon_contact2,
            footer.url_icon2 = req.body.url_icon2,
            footer.icon_contact3 = req.body.icon_contact3,
            footer.url_icon3 = req.body.url_icon3,
            footer.icon_contact4 = req.body.icon_contact4,
            footer.url_icon4 = req.body.url_icon4,
            footer.icon_contact5 = req.body.icon_contact5,
            footer.url_icon5 = req.body.url_icon5,
            footer.title4 = req.body.title4,
            footer.placeholder = req.body.placeholder,
            footer.titlebtn = req.body.titlebtn,
            footer.title5 = req.body.title5,
            footer.desc1 = req.body.desc1,
            footer.imgIcon1 = req.body.imgIcon1,
            footer.title6 = req.body.title6,
            footer.desc2 = req.body.desc2,
            footer.imgIcon2 = req.body.imgIcon2,
            footer.title7 = req.body.title7,
            footer.desc3 = req.body.desc3,
            footer.imgIcon3 = req.body.imgIcon3,


            footer.save().then(() => {
                res.send('Editado com Sucesso!')
            }).catch((err) => {
                res.send('Erro ao Editar ' + err)
            })
    })
})


module.exports = router