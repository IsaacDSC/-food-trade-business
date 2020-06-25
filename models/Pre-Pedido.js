const db = require('./db')


const Pre_Pedido = db.sequelize.define('PrePedido', {
    codigo: {
        type: db.Sequelize.STRING,
        require: true
    },
    nome: {
        type: db.Sequelize.STRING,
        require: true
    },
    quantidade: {
        type: db.Sequelize.STRING,
        require: true
    },
    valor: {
        type: db.Sequelize.FLOAT,
        require: true
    },
})

//models acionando
//Pre_Pedido.sync({ force: true })

module.exports = Pre_Pedido