const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const User = require("./modle/user"); 
const UserRouter = require("./route/user");
const marvelMovies = require("./Marvel_Movies.json");
const DcMovies = require("./Dc_movies.json");
const DcRouter = require("./route/dc");
const MarvelRouter = require("./route/marvel");
const bioRouter = require("./route/bio");
const ActorRouter = require("./route/actor");

const secretKey = "snsjsnisjehyrhdbbsiskednj";
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

app.get("/marvel", cors(), (req, res) => {
  return res.json(marvelMovies);
});

app.get("/dc", cors(), (req, res) => {
  return res.json(DcMovies);
});

app.use("/movies", DcRouter);
app.use("/movies", MarvelRouter);
app.use("/user", UserRouter);
app.use("/add", bioRouter);
app.use("/actors", ActorRouter);

app.get("/user/data", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(' ')[1]; 
  try {
    const decoded = jwt.verify(token, secretKey);
    const user = await User.findById(decoded.userId, 'email username'); 
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json({ email: user.email, username: user.username });
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
});

app.listen(PORT, '0.0.0.0', () => console.log(`Server Started At PORT ${PORT}`));
