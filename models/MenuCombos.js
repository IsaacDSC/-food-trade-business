const db = require('./db')

const MenuCombo = db.sequelize.define('menu_combo', {
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
        title5: {
            type: db.Sequelize.STRING,
            require: true
        },
        title6: {
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
        desc5: {
            type: db.Sequelize.STRING,
            require: true
        },
        desc6: {
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
        },
        valor5: {
            type: db.Sequelize.STRING,
            require: true
        },
        valor6: {
            type: db.Sequelize.STRING,
            require: true
        }

    })
    //adionando table(models)
    //MenuCombo.sync({ force: true })

module.exports = MenuCombo