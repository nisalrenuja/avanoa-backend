const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
  },
  { collection: "Cluster0" }
);

const model = mongoose.model("UserData", User);

module.exports = model;
