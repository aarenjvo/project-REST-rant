const express = require('express')
require('dotenv').config()

const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`listening on port ${PORT}`))

