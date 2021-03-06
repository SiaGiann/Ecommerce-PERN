const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./models')

const app = express()
  .use(cors())
  .use(bodyParser.json())

const { Product } = db 

var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')

app.listen(4001, () => console.log('Express API listening on port 4001'))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Mathods', 'GET,POST,PUT,DELETE')
  next()
})
