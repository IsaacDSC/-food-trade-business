const db = require('./db')

const Pedidos = db.sequelize.define('pedido', {
    burger1: {
        type: db.Sequelize.TEXT
    },
    burger1_2: {
        type: db.Sequelize.TEXT
    },
    burger1_3: {
        type: db.Sequelize.TEXT
    },
    burger1_4: {
        type: db.Sequelize.TEXT
    },
    burger1_5: {
        type: db.Sequelize.TEXT
    },

})

//Pedidos.sync({ force: true })

module.exports = Pedidos