const express = require('express')
const app = express()
const {errorHandler} = require('./middlewares/errorHandler')
// const JsonErrorHandler = require('./errors/JsonerrorHandler')
const router = require('./routes/uploader')
const fileUpload = require('express-fileupload')



app.use( fileUpload() )

app.use( express.json() )

// app.use( JsonErrorHandler )

app.use( router )

app.use( errorHandler )



app.listen('5000', console.log('running on 5000'))