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
  Delay: {
    type: String,
    required: [true, "Please enter the Delay"],
    trim: true,
  },
});

const Setting = model("Setting", settingSchema);

module.exports = Setting;
