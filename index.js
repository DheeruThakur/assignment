const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/route");
const mongoURI = require("./config/mongoURI");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(routes);

mongoose.connect(mongoURI, () => {
  console.log("connected with Database");
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log("Server is running");
  });
});
