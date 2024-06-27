const {Schema, model} = require("mongoose")

const marvelSchema = new Schema({
    Hero_Name:{
        type:String,
        required:true,
    },
    Real_Name:{
        type:String,
        required:true,
    },
    Superpower:{
        type:String,
        required:true,
    },
    Image:{
        type:String,
        required:false,
    },
})

const Marvel = model("Marvel", marvelSchema)

module.exports = Marvel;