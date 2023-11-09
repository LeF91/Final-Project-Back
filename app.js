require("dotenv").config();

require("./db");

const express = require("express");
// const morgan = require("morgan")

const app = express();

require("./config")(app);

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling/index")(app);

module.exports = app;
