const express = require("express");
const app = express();

app.use(express.json());

const user = require("./routes/userRoute");
const form = require("./routes/formRoute");

app.use("/api/g1", user);
app.use("/api/g1", form);

module.exports = app;