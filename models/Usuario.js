const mongoose = require("mongoose");

const UsuariosSchema = mongoose.Schema({ 

    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido : {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }
    ,
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type:Array,
        required: false
    },
    fechaAlta: {
        type: Date,
        default:Date.now()
    }

    // fechaAlta : String


})

module.exports = mongoose.model("Usuario", UsuariosSchema);