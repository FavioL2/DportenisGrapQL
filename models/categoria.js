const mongoose = require("mongoose");

const CategoriaSchema = mongoose.Schema({ 
    nombre: {
        type:String,
        trim: false,
        required:true,
        unique:true
    }
});

module.exports = mongoose.model("Categoria",CategoriaSchema);