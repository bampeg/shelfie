require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , binController = require('./binController')

const { CONNECTION_STRING, SERVER_PORT } = process.env

const app = express()

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => app.set('db', db))


const { getBins, addEditBin, getBin, editBin, deleteBin } = binController
// Shelf
app.get('/api/getBins/:shelfId', getBins)
// Add to Bin
app.post('/api/addEditBin/:shelfId/:binId', addEditBin)
// Bin
app.get('/api/getBin/:shelfId/:binId', getBin)
app.delete('/api/deleteBin/:shelfId/:binId', deleteBin)


app.listen(SERVER_PORT, () => console.log(`Let it do on port ${SERVER_PORT}`))