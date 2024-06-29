const Router = require("express")
const router = Router();
const Actor = require("../modle/actor")
router.post("/add/actor",async(req,res)=>{
    try{
    const {actorName,Image} = req.body;
      const actor = await Actor.create({
       actorName:actorName,
       Image:Image,
      })
      return res.status(200).json(actor);
    }catch(error){
      return res.status(500).json(`Error ${error}`)
    }
})

router.get("/all/actors",async(req,res)=>{
    try{
        const actors = await Actor.find();
        return res.status(200).json(actors);
    }catch(error){
        return res.status(500).json(`Error ${error}`)
    }
})


module.exports = router;