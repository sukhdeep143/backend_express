const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userSchema = require("./models/user.moduls.js")
require("dotenv").config();


const cors = require("cors");
app.use(cors());


const mongo_url = process.env.MONGO_URL;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("This is home api");
});

app.post("/register",async (req, res) => {
  try {
    const userCreated = await userSchema.create(req.body)
    res.status(201).json({message: "User is created", user: userCreated})
  
    
  } catch (error) {
   res.status(500).json({message: error.message}) 
  }

}); 

app.get("/user", async (req, res) => {
  try {
    const user = await userSchema.find()
    res.status(200).json(user)
  } catch (error) {
       res.status(500).json({message: error.message}) 

  }
});

app.get("/signup", (req, res) => {
  res.send("This is sign up page");
});

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("Connected to database");
    app.listen(5000, () => {
      console.log("We are listing on port 5000");
    });
  })
  .catch(() => {
    console.log("Failed to connect");
  });
