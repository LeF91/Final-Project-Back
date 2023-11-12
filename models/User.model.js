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
    default: "user",
  },

  departement: { type: String, required: true },
  // form dans le front
});

const User = model("User", userSchema);

module.exports = User;
