const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')

const authenticate = require('./config/authenticate')
authenticate.passport

//adionando rotas
const home = require('./routes/home')
    //adicionando tela de adm
const admin = require('./routes/admin')
    //adionando pagina Menu
const menu = require('./routes/menu')
    //adionando pagina sobre
const sobre = require('./routes/sobre')
    //adionando pagina Contato
const contato = require('./routes/contato')
    //adionando login Administrador Site
const loginAdmin = require('./routes/loginAdmin')
    //adionando pagina de login
const login_register = require('./routes/login_register')
    //adionando paginas para  reset
const reset = require('./routes/reset')
    //adionando addbd dahsboard rotas post
const addBd = require('./routes/addBd')
    //adionando rota para apresentar visualização da edição pelo dashboard
const visualizarAdmin = require('./routes/visualizarAdmin')
    //adionando upload files
const uploadfiles = require('./routes/uploadFiles')



//configurando body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
    //configurando handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
    //adionando pasta public
app.use(express.static(path.join(__dirname, 'public')))
    //configurando a sessao
app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }))
    //configurando passport
app.use(passport.initialize())
app.use(passport.session())
    //configurando flash
app.use(flash())
    //configurando midleware flash
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    next()
})


app.use('/', home)
app.use('/admin', admin)
app.use('/menu', menu)
app.use('/sobre', sobre)
app.use('/contato', contato)
app.use('/superuser', loginAdmin)
app.use('/reset', reset)
app.use('/addbd', addBd)
app.use('/visAdmin', visualizarAdmin)
app.use('/uploadfiles', uploadfiles)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT} `)
    console.log('BREAK SERVER ctrl + c')
})