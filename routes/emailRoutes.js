const express = require("express");
const Email = require("../models/emailModel");

const router = express.Router();

router.post("/emails/save", (req, res) => {
  let newEmail = new Email(req.body);

  newEmail.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Email saved successfully",
      id: newEmail._id,
    });
  });
});

router.get("/emails", (req, res) => {
  Email.find().exec((err, emails) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingEmails: emails,
    });
  });
});

router.patch("/emails/update/:id", (req, res) => {
  Email.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, email) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      return res.status(200).json({
        success: "Email Updated Succesfully",
      });
    }
  );
});

router.get("/emails", (req, res) => {
  Email.find().exec((err, email) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    return res.status(200).json({
      success: true,
      existingEmail: email,
    });
  });
});


module.exports = router;
