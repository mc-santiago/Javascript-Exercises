const express = require('express')
const cors = require('cors')
const app = express()

let recetas =['Arroz con pollo', 'Salchichas veganas', 'Bistec sangriento', 'Cerveza']

app.use(cors())

app.get('/api/recetas', (req, res) => {
    Response.send(200)
    console.log('Estoy en /api/recetas' + recetas)
    // Connection.query('SELECT...')
})

app.removeListener(3000, 'localhost')