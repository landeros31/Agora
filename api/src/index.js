require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const path = require('path')
const user = require('./routes/user')


// Conection MongoDB
require('./db/mongo')

// Init Express
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))
app.use(express.static('../client/build'))
app.use('/api', user)


// Setting
const port = (process.env.PORT || 3003)
app.set('port', port)

// Init Server
app.listen(app.get('port'), (error) => {
  if (error) {
    console.error('Error al iniciar el servidor')
  } else {
    console.log('Servidor iniciado en el puerto:' + port)
  }
})

module.exports = app
