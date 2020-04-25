const express = require('express')
const router = express.Router()

//adionando models
const HeaderNav = require('../models/HeaderNav')


router.post('/headernav', (req, res)=>{
    HeaderNav.findOne({id: req.body.id}).then((nav)=>{
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

        nav.save().then(()=>{
            res.send('Editado com Sucesso!')
        }).cath((err)=>{
            res.send('Erro ao Editar:  '+ err)
        })
    })
})
/*
router.post('/headernav', (req, res) => {
    res.send(req.body.nav1)
})
*/


module.exports = router