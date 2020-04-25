const express = require('express')
const router = express.Router()

//adionando models
const HeaderNav = require('../models/HeaderNav')
const pagHome_slideshow = require('../models/PagHome_Slideshow')

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
            res.send('Editado com Sucesso!')
        }).cath((err) => {
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



module.exports = router