const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

//models
require('../models/SuperUser')
const Usuarios = require('../models/Usuarios')

module.exports = function(passport) {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, (email, password, done) => {
        Usuarios.findOne({ where: { email: email } }).then((user) => {
            //console.log(user)
            if (!user) {
                console.log('não achou usuario!')
                return done(null, false, { messages: 'Esta conta não Existe' })
            }
            bcrypt.compare(password, user.password, (err, batem) => {
                if (batem) {
                    console.log('senhas batem')
                    if (Usuarios.findOne({ where: { statusConfirmated: 'null' } })) {
                        console.log('false statusConfirmated')
                        return done(null, false, { message: 'Acesse Primeito: http://10.0.0.122/usuario/verification' })
                    } else {
                        return done(null, user)
                    }
                } else {
                    console.log('senhas não batem')
                    return done(null, false, { messages: "Senha Incorreta" })
                }
            })
        })
    }))
    passport.serializeUser((user, done) => {
        //console.log('salvo id do usuario: ' + user.id)
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        //console.log('this:' + id)
        //done(id)
        Usuarios.findOne({ where: { id: id } }).then((user) => {
            done(null, user)
        })
    })
}