const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(authRoutes);


const mongoUri =
  "mongodb+srv://admin:passwordpassword@cluster0.y4z2k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mangoose instance");
});

mongoose.connection.on("error", (err) => {
  console.error("error connectin mongo");
});

app.get("/", (req, res) => {
  res.send("Hi there how are you!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
