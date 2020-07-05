const db = require('./db')

const LoginAdmin = db.sequelize.define('loginAdmin', {
        login: {
            type: db.Sequelize.STRING,
            require: true
        },
        senha: {
            type: db.Sequelize.STRING,
            require: true
        }
    })
    //create models table
    //LoginAdmin.sync({ force: true })


module.exports = LoginAdmin