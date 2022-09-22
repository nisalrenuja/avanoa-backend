const express = require("express");
const Reminders = require("../models/reminderModel");

const router = express.Router();

router.post("/reminder/save", (req, res) => {
  let newReminder = new Reminders(req.body);

  newReminder.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Reminder saved successfully",
    });
  });
});

router.get("/reminders", (req, res) => {
  Reminders.find().exec((err, reminders) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingReminders: reminders,
    });
  });
});

router.put("/reminder/update/:id", (req, res) => {
  Reminders.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, reminder) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      return res.status(200).json({
        success: "Reminder Updated Succesfully",
      });
    }
  );
});

