require("dotenv").config();
require("./../db");
const Vehicule = require("./../models/Vehicule.model");
const mockData = require("./vehicule-db");

async function vehicule() {
  try {
    console.time("deleteTime");
    await Vehicule.deleteMany();
    console.timeEnd("deleteTime");
    await Vehicule.create(mockData);
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
}

vehicule();
