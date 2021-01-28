const mongoose = require("mongoose");

const filtrosSchema = mongoose.Schema({ 
    categoria: {
        type:mongoose.Schema.Types.ObjectId,
        trim: false,
        required:false,
        default: " "
    },
    marca:{
        type:String,
        trim:false,
        required:false,
        default:" "
    },
    uso:{
        type:String,
        trim:false,
        required:false,
        default:" "
    },
    talla:{
        type:Number,
        required:false,
        default:0
    },
    precioMin:{
        type:Number,
        required:false,
        default:0.0
    },
    precioMax:{
        type:Number,
        required:false,
        default:10000000.0
    },
    oferta:{
        type:Number,
        required:false,
        default:0.0
    },
    familia:{
        type:String,
        required:false,
        default: ""
    },
    departamento: {
        type: String,
        required:false,
        trim: true,
        default : ""

    }
});


module.exports = mongoose.model("filtros",filtrosSchema);