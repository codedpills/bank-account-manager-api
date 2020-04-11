const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const db = mongoose.connect(
  "mongodb+srv://codedpills:wunAlmKiyoapbGOw@accountapi-unvad.mongodb.net/accountdb?retryWrites=true&w=majority"
);

const PORT = process.env.PORT || 5000;
const accountRouter = require("./routes/accountRouter")();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", accountRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the bank account API");
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
