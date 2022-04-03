const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/api/register", (req, res) => {
  console.log(req.body);
  res.json({ status: "ok" });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
