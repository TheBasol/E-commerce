const mongoose = require('mongoose')
const { mongodb } = require('./config')

const uri = `mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then((db) => {
    console.log(`Conexión Exitosa a MongoDB`)
}).catch((err) => {
    console.log(`Error al conectarse a MongoDB: ${err}`)
});

const connection = mongoose.connection

module.exports = connection