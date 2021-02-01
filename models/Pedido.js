const mongoose = require("mongoose");

const PedidoSchema = mongoose.Schema({
    pedido: {
        type: Array,
        required: true
    },
    total:{
        type: Number,
        required: true
    },
    cliente:{
        type:mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Usuario'
    },
    estado:{
        type:String,
        default: "Pendiente"
    },
    creado:{
        type:Date,
        defaul: Date.now()
    }
});
module.exports = mongoose.model("Pedido",PedidoSchema);