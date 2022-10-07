const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      min: 6,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/avanoa/image/upload/v1649475938/avatar/default_avatar_oyb8ep.png",
    },
  },
  { timestamp: true }
);
///time stamp updated too false

const User = model("User", userSchema);

module.exports = User;
