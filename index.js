const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const apiRouter = require('./routes')

// SwaggerDocs
const swaggerUI = require('swagger-ui-express')
const {swaggerDocs} = require('./swagger')
//------

app.use(cors())
app.use(express.json())

app.use('/api', apiRouter)

//--- SwaggerAPI
app.use('/api/v1', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
//---------

app.get('/', (req,res)=>{
    res.send("Hola mundo")
})

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`Servidor conectado en puerto ${PORT}`)
})