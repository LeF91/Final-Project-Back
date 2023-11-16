const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const vehiculeSchema = new Schema({
  image: { type: String, required: true },
  brand: { type: String, required: true },

  model: {
    name: { type: String, required: true },
    creationYear: { type: Date, required: true },
    productionStop: { type: Date },
  },

  motorisation: {
    name: { type: String, required: true },
    energy: { type: String, required: true },
    power: { type: String, required: true },
  },

  category: {
    type: String,
    enum: [
      "4x4",
      "compacte",
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

  price: { type: Number, min: 0 },
});

const Vehicule = model("Vehicule", vehiculeSchema);

module.exports = Vehicule;
