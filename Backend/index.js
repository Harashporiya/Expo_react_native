const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserRouter = require("./route/user");
const marvelMovies = require("./Marvel_Movies.json");
const DcMovies = require("./Dc_movies.json");
const DcRouter = require("./route/dc")
const MarvelRouter = require("./route/marvel")
const bioRouter = require("./route/bio")
const jwt = require("jsonwebtoken")
const User = require("./modle/user")

const secretkey = "snsjsnisjehyrhdbbsiskednj";

const app = express();
const PORT = 5002;

mongoose.connect("mongodb://127.0.0.1:27017/Expo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

app.get("/marvel",cors(), async (req, res) => {
  return res.json(marvelMovies);
});

app.get("/dc",cors(), async (req, res) => {
  return res.json(DcMovies);
});

app.use("/movies",DcRouter);
app.use("/movies",MarvelRouter);
app.use("/user", UserRouter);
app.use("/add",bioRouter)

app.get("/user/data",async(req,res)=>{
  const token = req.headers.authorization
  // console.log(token)
  if(!token){
    return res.status(401).json({error:"Unauthorized"})
  }
  try{
    const decoded = jwt.verify(token,secretkey);
    const {email, username} = await User.findOne({_id:decoded.userId});
    res.json({email:email,username:username})
  }catch(error){
    return res.status(401).json({ message: "Invalid token" })
  }
})

app.listen(PORT, '0.0.0.0', () => console.log(`Server Started At PORT ${PORT}`));
