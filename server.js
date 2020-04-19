const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const path = require('path')

//adionando rotas
const home = require('./routes/home')
    //adicionando tela de adm
const adm = require('./routes/adm')
    //adionando pagina Menu
const menu = require('./routes/menu')
    //adionando pagina sobre
const sobre = require('./routes/sobre')
    //adionando pagina Contato
const contato = require('./routes/contato')
    //adionando pagina de login
const login_register = require('./routes/login_register')
    //adionando paginas para  add_bd
const add_bd = require('./routes/add_bd')

//configurando body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
    //configurando handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//adionando pasta public
app.use(express.static(path.join(__dirname, 'public')))


app.use('/', home)
app.use('/adm', adm)
app.use('/menu', menu)
app.use('/sobre', sobre)
app.use('/contato', contato)
app.use('/login', login_register)
app.use('/add_bd', add_bd)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT} `)
    console.log('BREAK SERVER ctrl + c')
})