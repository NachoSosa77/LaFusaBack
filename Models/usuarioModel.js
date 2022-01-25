const mongoose = require('../bin/mongoDb');

const usuarioSchema = new mongoose.Schema({

    nombre: String,
    apellido: String,
    dni: String,
    email: String,
    password: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("usuario", usuarioSchema)

