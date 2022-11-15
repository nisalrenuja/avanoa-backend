const { Schema, model } = require("mongoose");

const settingSchema = new Schema({
  Email: {
    type: String,
    required: [true, "Please enter the Email"],
    unique: true,
  },
  Gender: {
    type: String,
    required: [true, "Please enter the Gender"],
    unique: false,
  },
  Volume: {
    type: Number,
    required: [true, "Please enter the Volume"],
    unique: false,
  },
  Delay: {
    type: Number,
    required: [true, "Please enter the Delay"],
    unique: false,
  },
});

const Setting = model("Setting", settingSchema);

module.exports = Setting;
