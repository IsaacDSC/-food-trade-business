module.exports = {
    protectAdmin: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        } else {
            req.flash('error_msg', 'Necessário realizar o login')
            res.redirect('/login')
        }
    }
}