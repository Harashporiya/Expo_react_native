const {Schema, model} = require("mongoose")

const dcSchema = new Schema({
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

const Dc = model("dc", dcSchema)

module.exports = Dc;