const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const config = require("./config");

// Routes
const homeRoutes = require("./routes/home.route");
const userRoutes = require("./routes/api/users");

// Express App
const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    (res) =>
      app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`)),
    console.log("MongoDB connected succesfully!")
  )
  .catch((err) => console.log(err));

// Middleware
app.use(cors());
app.use(morgan("dev"));

// Static folder - view
app.use(express.static("client"));

// Use Routes
app.use("/", homeRoutes);
app.use("api/users", userRoutes);

// // 404 page
// app.use((req, res) => {
//   res.status(404).render("404", { title: "404" });
// });
