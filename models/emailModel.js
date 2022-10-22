const { Schema, model } = require("mongoose");

const emailSchema = new Schema(
  {
    email1: {
      type: String,
      required: [true, "Please enter the email1"],
      trim: true,
    },
    email2: {
      type: String,
      required: [true, "Please enter the email2"],
      trim: true,
    },
    email3: {
      type: String,
      required: [true, "Please enter the email3"],
      trim: true,
    },
  },
  { timestamp: true }
);
const Email = model("Email", emailSchema);

module.exports = Email;
