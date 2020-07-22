const SuperUser = require('./models/SuperUser')

SuperUser.findByPk(id).then((id) => {
    console.log(id)
}).catch((err) => {
    console.log(err)
})