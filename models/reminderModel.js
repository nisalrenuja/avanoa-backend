const { Schema, model } = require("mongoose");

const reminderSchema = new Schema(
  {
    Title: {
      type: String,
      required: [true, "Please enter the Title"],
      trim: true,
      unique: false,
    },
    Description: {
      type: String,
      required: [true, "Please enter the Description"],
      trim: true,
      unique: false,
    },
    Time: {
      type: String,
      required: [true, "Please enter your Time"],
      trim: true,
      unique: false,
    },
    Timestamp: {
      type: Number,
      required: [true, "Please enter your Timestamp"],
      trim: true,
      unique: false,
      validate : {
        validator : Number.isInteger,
        message   : '{VALUE} is not an integer value'
      }
    },
  },
  { timestamp: true }
);

const Reminder = model("Reminder", reminderSchema);

module.exports = Reminder;