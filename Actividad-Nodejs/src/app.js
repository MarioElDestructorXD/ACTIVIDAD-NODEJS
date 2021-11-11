const express = require('express')
const morgan = require('morgan')
const path = require('path')
const mysql = require('mysql')
const myConnection = require('express-myconnection')
const app = express()

//IMPORTANDO RUTAS
const candiesRoutes = require('./routes/candies')
const { urlencoded } = require('body-parser')

//SETTINGS

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


//MIDDLEWARES

app.use(morgan('dev'))
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'candy_store'
}, 'single'))

app.use(express.urlencoded({extended: false}))

//ROUTES

app.use('/', candiesRoutes)

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')))

//STARTING THE SERVER

app.listen(app.get('port'), () =>{
    console.log('Server on Port 3000')
})