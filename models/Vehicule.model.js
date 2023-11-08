const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const vehiculeSchema = new Schema({
  brand: { type: String, required: true },

  model: {
    name: { type: String, required: true },
    year: { type: Number, required: true },
  },

  motorisation: {
    name: { type: String, required: true },
    energy: { type: String, required: true },
    power: { type: Number, required: true },
  },

  category: {
    name: {
      type: String,
      enum: [
        "4x4",
        "SUV",
        "citadine",
        "berline",
        "break",
        "cabriolet",
        "coupe",
        "monospace",
        "sport",
      ],
      required: true,
    },

    // Price: {}
  },
});
