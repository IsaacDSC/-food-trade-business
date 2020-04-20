const db = require('./db')

const Footer_models = db.sequelize.define('footer', {
    title_sobre: {
        type: db.Sequelize.STRING,
        require: true
    },
    describe_sobre: {
        type: db.Sequelize.TEXT,
        require: true
    },
    title_funcionamento: {
        type: db.Sequelize.STRING,
        require: true
    },
    Hr_funcionamento: {
        type: db.Sequelize.STRING,
        require: true
    },
    status_funcionamento: {
        type: db.Sequelize.STRING,
    },
    feriados_funcionamento: {
        type: db.Sequelize.STRING,
        require: true
    },
    endereço_completo: {
        type: db.Sequelize.STRING,
        require: true
    },
    googlemapslocation: {
        type: db.Sequelize.STRING,
        require: true
    },
    number_email: {
        type: db.Sequelize.STRING,
        require: true
    },
    icon_contact1: {
        type: db.Sequelize.STRING
    },
    icon_contact2: {
        type: db.Sequelize.STRING
    },
    icon_contact3: {
        type: db.Sequelize.STRING
    },
    icon_contact4: {
        type: db.Sequelize.STRING
    },
    icon_contact5: {
        type: db.Sequelize.STRING
    },
    title_recEmail: {
        type: db.Sequelize.STRING,
        require: true
    },
    placeholder_subscribe: {
        type: db.Sequelize.STRING
    },
    title_btn_subscribe: {
        type: db.Sequelize.STRING
    }
})

//Create table
//Footer_models.sync({ force: true })


module.exports = Footer_models