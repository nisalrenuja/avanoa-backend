const { Schema, model } = require("mongoose");

const reminderSchema = new Schema(
  {
    Title: {
      type: String,
      required: [true, "Please enter the Title"],
      trim: true,
    },
    Description: {
      type: String,
      required: [true, "Please enter the Description"],
      trim: true,
      unique: true,
    },
    Time: {
      type: String,
      required: [true, "Please enter your Time"],
      trim: true,
      unique: true,
    },
  },
  { timestamp: true }
);

const Reminder = model("Reminder", reminderSchema);

module.exports = Reminder;
