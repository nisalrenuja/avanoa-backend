const { Schema, model } = require("mongoose");

const emailSchema = new Schema(
  {
    email1: {
      type: String,
      required: [true, "Please enter the email1"],
      trim: true,
      default: "nrenuja@gmail.com",    
      unique: false,
    },
    email2: {
      type: String,
      required: [true, "Please enter the email2"],
      trim: true,
      default: "nrenuja@gmail.com",
      unique: false, 
    },
    email3: {
      type: String,
      required: [true, "Please enter the email3"],
      trim: true,
      default: "nrenuja@gmail.com", 
      unique: false,
    },
  },
  { timestamp: true }
);
const Email = model("Email", emailSchema);

module.exports = Email;
