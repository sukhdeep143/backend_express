const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./models/user.moduls.js"); // ✅ use consistent naming
const bcrypt = require('bcryptjs');
require("dotenv").config();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const mongo_url = process.env.MONGO_URL;

app.get("/", (req, res) => {
  res.send("This is home api");
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userCreated = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "User is created", user: userCreated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/user", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Incoming data:", req.body);

    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("Email not found!");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send("Wrong password");
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).send("Something went wrong");
  }
});

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("Connected to database");
    app.listen(5000, () => {
      console.log("We are listening on port 5000");
    });
  })
  .catch(() => {
    console.log("Failed to connect");
  });
