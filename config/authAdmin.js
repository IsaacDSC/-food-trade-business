const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

//models
const Usuarios = require('../models/Usuarios')

module.exports = function(passport) {
    passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, (email, pwd, done) => {
        Usuarios.findOne({ where: { email: email } }).then((user) => {
            if (!user) {
                return done(null, false, { message: 'Esta conta não Existe' })
            }
            bcrypt.compare(pwd, user.password, (err, batem) => {
                if (batem) {

                } else {
                    return done(null, false, { message: "Senha Incorreta" })
                }
            })
        })
    }))

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        Usuarios.findByPk(id, (err, user) => {
            done(err, user)
        })
    })

}