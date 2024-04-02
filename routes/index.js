const express = require('express')
const router = express.Router()

const reservasRouter = require('./routes')

router.use('/reservas', reservasRouter)

module.exports = router