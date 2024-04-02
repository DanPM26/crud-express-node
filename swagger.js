const express = require('express')
const app = express()
const cors = require('cors')
const swaggerJsDoc = require('swagger-jsdoc')
// const swaggerUI = require('swagger-ui-express')
const path = require('path')

require('dotenv').config()

const port = process.env.PORT || 3005
const serverUrl = process.env.SERVER_URL || `http://localhost:${port}`

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Reservaciones CRUD Node.js',
            version: '1.0.0',
            description: 'Esto es una simple aplicación CRUD realizada con Express y documentada con Swagger'
        },
        servers: [
            {
                url: serverUrl,
            },
        ],
    },
    apis: [`${path.join(__dirname, './routes/*.js')}`],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

module.exports = {
    swaggerDocs
}





