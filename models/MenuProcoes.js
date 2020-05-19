const db = require('./db')


const MenuPromocoes = db.sequelize.define('menu_promocoes', {
    title: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc: {
        type: db.Sequelize.STRING,
        require: true
    },
    tabela1: {
        type: db.Sequelize.STRING,
        require: true
    },
    tabela2: {
        type: db.Sequelize.STRING,
        require: true
    },
    tabela3: {
        type: db.Sequelize.STRING,
        require: true
    },
    title1: {
        type: db.Sequelize.STRING,
        require: true
    },
    title2: {
        type: db.Sequelize.STRING,
        require: true
    },
    title3: {
        type: db.Sequelize.STRING,
        require: true
    },
    title4: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc1: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc2: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc3: {
        type: db.Sequelize.STRING,
        require: true
    },
    desc4: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor1: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor2: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor3: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor4: {
        type: db.Sequelize.STRING,
        require: true
    }

})

//create table(model)
MenuPromocoes.sync({ force: true })

module.exports = MenuPromocoes