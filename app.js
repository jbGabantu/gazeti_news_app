const express = require("express");
const morgan = require("morgan");
const homeController = require("./controllers/home.controller");

const app = express();

//Logger Middleware
app.use(morgan("dev"));

//Static folder
app.use(express.static("client"));

//Homepage Route
app.use("/", homeController);

//PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
