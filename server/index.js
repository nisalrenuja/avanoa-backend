const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://avanoa:c3q1ycOJynyIon8L@cluster0.nzwlw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
    console.log("User created");
  } catch (err) {
    res.json({ status: "error", error: "Duplicate Email" });
    console.log(err);
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
