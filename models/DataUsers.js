const db = require('./db')

const DataUsers = db.sequelize.define('datauser', {
    visitas: {
        type: db.Sequelize.STRING
    }

})

//DataUsers.sync({ force: true })

module.exports = DataUsers