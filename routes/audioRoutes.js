const express = require("express");
const Audio = require("../models/audioModel");

const router = express.Router();

router.post("/audio/save", (req, res) => {
  let newAudio = new Audio(req.body);

  newAudio.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Reminder saved successfully",
      id: newAudio._id,
    });
  });
});