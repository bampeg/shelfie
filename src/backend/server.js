const allTheData = [
            {
                  1: {id: 1, name: '', price: 0},
                  2: {id: 2, name: '', price: 0},
                  3: {id: 3, name: '', price: 0},
                  4: {id: 4, name: '', price: 0},
                  5: {id: 5, name: '', price: 0},
            },
            {
                  6: {id: 6, name: '', price: 0},
                  7: {id: 7, name: '', price: 0},
                  8: {id: 8, name: '', price: 0},
                  9: {id: 9, name: '', price: 0},
                  10: {id: 10, name: '', price: 0},
            },
            {
                  11: {id: 11, name: '', price: 0},
                  12: {id: 12, name: '', price: 0},
                  13: {id: 13, name: '', price: 0},
                  14: {id: 14, name: '', price: 0},
                  15: {id: 15, name: '', price: 0},
            },
            {
                  16: {id: 16, name: '', price: 0},
                  17: {id: 17, name: '', price: 0},
                  18: {id: 18, name: '', price: 0},
                  19: {id: 19, name: '', price: 0},
                  20: {id: 20, name: '', price: 0},
            }]

const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors')
      massive = require('massive'),
      bin_controller = require('./bin_controller'),
      app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('', () => {})

const port = 3002
app.listen(port, () => console.log(`Let it do on port ${port}`))


