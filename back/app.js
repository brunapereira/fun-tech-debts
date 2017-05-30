const express = require('express')

const app = express()

app.post('techdebt', (req, res) => {

})

app.get('techdebt', (req, res) => {

})

app.use(express.static(__dirname + '/public'))

app.listen(8000, () => console.log('Node app is running...'))
