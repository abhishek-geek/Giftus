const express = require("express");
const mongoose = require("mongoose");
const gifts = require("./routes/gifts");
const categories = require("./routes/categories");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
app.use(cors());

mongoose
  .connect("mongodb://localhost/giftus")
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

app.use("/api/gifts/", gifts);
app.use("/api/categories/", categories);
