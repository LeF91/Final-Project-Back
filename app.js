require("dotenv").config();

require("./db");

const express = require("express");
// const morgan = require("morgan")

const app = express();

require("./config")(app);

// Routes

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

require("./error-handling")(app);

module.exports = app;
