const mongoose = require("mongoose");

const ProductoSchema = mongoose.Schema({ 
    nombre : {
        type: String,
        required: true,
        trim: false
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    },
    talla: {
        type: Number,
        required: true,
        trim: true
    },
    existencia: {
        type: Number,
        required: true
    },
    familia: {
        type:String                
    },    
    departamento: {
        type: String,
        required: true,
        trim: true
    },
    marca :{
        type:String,
        required:true,
        trim: false
    },
    uso: {
        type: String,
        required:false,
        trim: true
    },
    categoria: {
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Categoria"
    }
});
module.exports = mongoose.model("Producto",ProductoSchema );