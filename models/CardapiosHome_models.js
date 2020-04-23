const db = require('./db')

const CadapioHome_models = db.sequelize.define('cardapioHome_pag', {
    title: {
        type: db.Sequelize.STRING(60),
        require: true
    },
    subtitle: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    nav2: {
        type: db.Sequelize.STRING(30),
        require: true
    },
    url2: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    img_item2_1: {
        type: db.Sequelize.STRING,
        require: true
    },
    title_item2_1: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc_item2_1: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor_item2_1: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    img_item2_2: {
        type: db.Sequelize.STRING,
        require: true
    },
    title_item2_2: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc_item2_2: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor_item2_2: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    img_item2_3: {
        type: db.Sequelize.STRING,
        require: true
    },
    title_item2_3: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc_item2_3: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor_item2_3: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    nav3: {
        type: db.Sequelize.STRING(30),
        require: true
    },
    url3: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    img_item3_1: {
        type: db.Sequelize.STRING,
        require: true
    },
    title_item3_1: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc_item3_1: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor_item3_1: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    img_item3_2: {
        type: db.Sequelize.STRING,
        require: true
    },
    title_item3_2: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc_item3_2: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor_item3_2: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    img_item3_3: {
        type: db.Sequelize.STRING,
        require: true
    },
    title_item3_3: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc_item3_3: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor_item3_3: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    nav4: {
        type: db.Sequelize.STRING(30),
        require: true
    },
    url4: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    img_item4_1: {
        type: db.Sequelize.STRING,
        require: true
    },
    title_item4_1: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc_item4_1: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor_item4_1: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    img_item4_2: {
        type: db.Sequelize.STRING,
        require: true
    },
    title_item4_2: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc_item4_2: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor_item4_2: {
        type: db.Sequelize.STRING(40),
        require: true
    },
    img_item4_3: {
        type: db.Sequelize.STRING,
        require: true
    },
    title_item4_3: {
        type: db.Sequelize.STRING(90),
        require: true
    },
    desc_item4_3: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    valor_item4_3: {
        type: db.Sequelize.STRING(40),
        require: true
    }

})

//create table
//CadapioHome_models.sync({ force: true })

module.exports = CadapioHome_models