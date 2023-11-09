const router = require("express").Router();
const Vehicule = require("../models/Vehicule.model");

router.get("/api/vehicules", (req, res) => {
  Vehicule.find({})
    .then((vehicules) => {
      console.log("Retrieved cars", vehicules);
      res.json(vehicules);
    })
    .catch((error) => {
      console.log(error, "Error to find cars", error);
      res.status(500).send({ error: "Failed to retrieve cars" });
    });
});

app.post("/api/vehicules", async (req, res, next) => {
  const vehicule = { ...req.body };
  Vehicule.create(vehicule)
    .then((createdvehicule) => {
      res.status(201).json(createdvehicule);
      console.log("Car created");
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get("/api/vehicule/:vehiculeId", async (req, res) => {
  const { vehiculeId } = req.params;
  Vehicule.findById(vehiculeId)
    .then((vehicule) => {
      console.log("Retrieved vehicule ->", vehicule);
      res.status(200).json(vehicule);
    })
    .catch((error) => {
      console.log(error, "Error to find cars", error);
      res.status(500).send({ error: "Failed to retrieve cars" });
    });
});

app.put("/api/vehicules/:vehiculeId", (req, res) => {
  const { vehiculeId } = req.params;
  Vehicule.findByIdAndUpdate(vehiculeId, req.body, { new: true })
    .then((vehicule) => {
      console.log("Updating cars ->", vehicule);
      res.status(204).json(vehicule);
    })
    .catch((error) => {
      console.error("Error while updating cars ->", error);
      res.status(500).send({ error: "Failed to update cars" });
    });
});

app.delete("/api/vehicules/:vehiculeId", (req, res) => {
  const { vehiculeId } = req.params;
  Vehicule.findByIdAndDelete(vehiculeId)
    .then((vehicule) => {
      console.log("Deleting cars ->", vehicule);
      res.status(204).send();
    })
    .catch((error) => {
      console.error("Error while deleting cars ->", error);
      res.status(500).send({ error: "Failed to delete cars" });
    });
});
