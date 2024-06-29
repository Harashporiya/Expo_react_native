const {Schema , model} = require("mongoose")

const ActorScheam = new Schema({
    actorName:{
        type:String,
        required:true,
    },
    Image:{
        type:String,
        required:true,
    }
})

const Actor = model("Actor",ActorScheam)

module.exports = Actor;