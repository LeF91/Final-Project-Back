const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },

  email: { type: String, required: true },

  password: { type: String, required: true },

  adress: { type: String, required: true },
  // Only departement
});

const User = model("User", userSchema);

module.exports = User;
