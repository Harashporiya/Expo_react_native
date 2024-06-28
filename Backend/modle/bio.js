const {Schema , model} = require("mongoose")

const BioScheam = new Schema({
    editBio:{
        type:String,
        required:true,
    }
})

const Bio = model("Bio",BioScheam)

module.exports = Bio;