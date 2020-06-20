const locaslStrategy = require('passport-local').Strategy
const bcryptjs = require('bcryptjs')


//models Login admin
const LoginAdmin = require('../models/LoginAdmin')


module.export = ((passport) => {
    passport.use(new locaslStrategy({
        usernameField: 'login',
        passwordField: 'pwd'
    })), (login, pwd, done) => {
        LoginAdmin.findOne({ login: login }).then((user) => {
            if (!user) {
                return done(null, false, { error_msg: 'Cadastro com este e-mail não existe!' })
            }
            bcryptjs.compare(pwd, user.pwd, (err, corr) => {
                if (corr) {
                    return done(null, user)
                } else {
                    return done(null, false, { error_msg: 'Dados incorretos!' })
                }
            })
        })
    }

    //salvando os dados na sessao
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        LoginAdmin.findById(id, (err, user) => {
            done(err, user)
        })
    })

})