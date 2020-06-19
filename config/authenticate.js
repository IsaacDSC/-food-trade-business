const locaslStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')


//models Login admin
const LoginAdmin = require('../models/LoginAdmin')
const passport = require('passport')

module.export = ((passport) => {
    passport.use(new locaslStrategy({
        usernameField: 'login',
        passwordField: 'pwd'
    })), (login, pwd, done) => {
        LoginAdmin.findOne({ login: login }).then((user) => {
            if (!user) {
                return done(null, false, { error_msg: 'Cadastro com este e-mail não existe!' })
            }
            bcrypt.compare(pwd, user.senha, (err, corr) => {
                if (corr) {
                    return (null, user)
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