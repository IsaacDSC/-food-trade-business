const db = require('./db')

const Usuarios = db.sequelize.define('usuario', {
    nome: {
        type: db.Sequelize.STRING(60),
        require: true
    },
    email: {
        type: db.Sequelize.STRING(150),
        unique: true,
        require: true
    },
    password: {
        type: db.Sequelize.STRING,
        require: true
    },
    code: {
        type: db.Sequelize.STRING,
        require: true
    },
    statusConfirmated: {
        type: db.Sequelize.STRING,
    },
    telefone: {
        type: db.Sequelize.INTEGER,
    },
    bairro: {
        type: db.Sequelize.STRING,
    },
    rua: {
        type: db.Sequelize.STRING,
    },
    residencia: {
        type: db.Sequelize.INTEGER,
    },
    complemento: {
        type: db.Sequelize.TEXT,
    }

})

//Usuarios.sync({ force: true })

module.exports = Usuarios