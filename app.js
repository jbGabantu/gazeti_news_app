const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");
const dotenv = require("dotenv");

dotenv.config();

// Import Routes
const homeRoute = require("./routes/home.route");
const userRoute = require("./routes/api/users");
const authRoute = require("./routes/api/auth");

const port = process.env.PORT || PORT_2;

// Connect to MongoDB
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    (res) =>
      app.listen(port, () => console.log(`Server started on PORT:${port}`)),
    console.log("MongoDB connected succesfully!")
  )
  .catch((err) => console.log(err));

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Static view folder
app.use(express.static("client"));

//Route Middlewares
app.use("/", homeRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
