const express = require("express");
const Email = require("../models/emailModel");

const router = express.Router();

router.patch("/email/update/:id", (req, res) => {
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

module.exports = router;
