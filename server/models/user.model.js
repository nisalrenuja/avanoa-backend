const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
  },
  { collation: "Cluster0" }
);

const model = mongoose.model("UserData", User);

module.exports = model;
