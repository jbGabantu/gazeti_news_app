const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const indexRouter = require("./routes/home.route");

const app = express();

//Middleware
app.use(morgan("dev"));
app.use(cors());

//Static folder - view
app.use(express.static("client"));

//Homepage Route
app.use("/", indexRouter);

//PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
