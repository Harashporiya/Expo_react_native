const Router = require("express")
const router = Router();
const Bio = require("../modle/bio")
router.post("/editbio",async(req,res)=>{
    try{
    const {editBio} = req.body;
      const bio = await Bio.create({
        editBio:editBio,
      })
      return res.status(200).json(bio);
    }catch(error){
      return res.status(500).json(`Error ${error}`)
    }
})

router.get("/add/bio",async(req,res)=>{
    try{
        const editBio = await Bio.find();
        return res.status(200).json(editBio);
    }catch(error){
        return res.status(500).json(`Error ${error}`)
    }
})


module.exports = router;