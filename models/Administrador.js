const db = require('./db')

const Administrativo = db.sequelize.define('loginAdmin', {
        nome: {
            type: db.Sequelize.STRING,
            require: true
        },
        cpf_cnpj: {
            type: db.Sequelize.STRING,
            require: true
        },
        email: {
            type: db.Sequelize.STRING,
            require: true
        },
        senha: {
            type: db.Sequelize.STRING,
            require: true
        }
    })
    //create tables (models)
Administrativo.sync({ force: true })

module.exports = Administrativo