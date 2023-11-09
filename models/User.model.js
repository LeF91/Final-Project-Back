const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: [true, "Password is required"],
  },

  role: {
    enum: ["admin", "user"],
    type: String,
  },

  adress: { type: String, required: true },
  // Only departement
});

const User = model("User", userSchema);

module.exports = User;
