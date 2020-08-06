const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");

// Routes
const indexRouter = require("./routes/home.route");

// Express App
const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
const dbURI =
  "mongodb+srv://johngabantu:Crystal7@gazetinews.dsbfs.mongodb.net/gazetinews?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    (res) =>
      app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`)),
    console.log("DB Connected Succesfully!")
  )
  .catch((err) => console.log(err));

// Middleware
app.use(cors());
app.use(morgan("dev"));

// Static folder - view
app.use(express.static("client"));

// Use Routes
app.use("/", indexRouter);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
