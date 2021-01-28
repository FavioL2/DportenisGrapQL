const mongoose = require("mongoose");

const DireccionSchema = mongoose.Schema({
    cp:{
        type:String,
        required: true,
        trim:true
    },
    calle:{
        type:String,
        trim:false,
        required: true
    },
    ciudad:{
        type:String,
        required: true,
        trim: false
    },
    estado:{
        type:String,
        required:true,
        trim:false
    },
    pais:{
        type:String,
        required:true,
        trim:false
    },
    numero: {
        type:String,
        required: true,
        trim:false
    }

});
module.exports = mongoose.model("Direccion",DireccionSchema );