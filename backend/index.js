const express = require("express");
const mongoose = require("mongoose");
const gifts = require("./routes/gifts");
const categories = require("./routes/categories");
const users = require("./routes/users");
const cors = require("cors");
const app = express();
const config = require("config");
const port = process.env.PORT || config.get("port");

app.listen(port, () => console.log(`Listening on port ${port}...`));
app.use(cors());

mongoose
  .connect(config.get("db"))
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

app.use("/api/gifts/", gifts);
app.use("/api/categories/", categories);
app.use("/api/users/", users);
