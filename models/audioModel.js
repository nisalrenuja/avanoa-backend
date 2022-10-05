const { Schema, model } = require("mongoose");

const audioSchema = new Schema({
  Gender: {
    type: String,
    required: [true, "Please enter the Gender"],
    trim: true,
  },
  Volume: {
    type: String,
    required: [true, "Please enter the Volume"],
    trim: true,
    unique: true,
  },
});
const Audio = model("Audio", audioSchema);

module.exports = Audio;
