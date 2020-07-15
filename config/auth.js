const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const passport = require('passport')

//models
const SuperUser = require('../models/SuperUser')

module.exports = function(passport) {
    passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, (email, pwd, done) => {
        SuperUser.findOne({ where: { email: email } }).then((user) => {
            if (!user) {
                return done(null, false, { message: 'Esta conta não Existe' })
            }
            bcrypt.compare(pwd, user.senha, (err, batem) => {
                if (batem) {
                    return done(null, user)
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
        SuperUser.findByPk(id, (err, user) => {
            done(err, user)
        })
    })

}