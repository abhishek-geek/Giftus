const express = require("express");
const mongoose = require("mongoose");
const gifts = require("./routes/gifts");

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));

mongoose
  .connect("mongodb://localhost/giftus")
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

app.use("/api/gifts/", gifts);
