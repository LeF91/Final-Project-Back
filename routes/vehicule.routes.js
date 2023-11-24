const router = require("express").Router();
const Vehicule = require("../models/Vehicule.model");
const Comment = require("./../models/Comment.model");
const { isAuthenticated, isAdmin } = require("../middleware/authMiddlewares");

router.get("/", (req, res) => {
  Vehicule.find({})
    .then((vehicules) => {
      console.log("Retrieved cars", vehicules);
      res.json(vehicules);
    })
    .catch((error) => {
      console.log(error, "Error to find cars", error);
      next(error);
    });
});

// router.post(
//   "/vehicule/create",
//   isAuthenticated,
//   isAdmin,
//   async (req, res, next) => {
//     const vehicule = { ...req.body };
//     Vehicule.create(vehicule)
//       .then((createdvehicule) => {
//         res.status(201).json(createdvehicule);
//         console.log("Car created");
//       })
//       .catch((error) => {
//         next(error);
//       });
//   }
// );

router.get("/:vehiculeId", async (req, res) => {
  const { vehiculeId } = req.params;
  Vehicule.findById(vehiculeId)
    .then((vehicule) => {
      console.log("Retrieved vehicule ->", vehicule);
      res.status(200).json(vehicule);
    })
    .catch((error) => {
      console.log(error, "Error to find cars", error);
      next(error);
    });
});

router.get("/:vehiculeId/comments", (req, res, next) => {
  Comment.find({ vehicule: req.params.vehiculeId })
    .then((comments) => {
      console.log("Retrieved cars", comments);
      res.json(comments);
    })
    .catch((error) => {
      console.log(error, "Error to find cars", error);
      next(error);
    });
});

router.post("/:vehiculeId/comments", async (req, res, next) => {
  const comment = { ...req.body };
  comment.user = req.userId;
  comment.vehicule = req.params.vehiculeId;
  Comment.create(comment)
    .then((createdcomment) => {
      res.status(201).json(createdcomment);
      console.log("Car created");
    })
    .catch((error) => {
      next(error);
    });
});

router.put("/:vehiculeId", isAuthenticated, isAdmin, (req, res) => {
  const { vehiculeId } = req.params;
  Vehicule.findByIdAndUpdate(vehiculeId, req.body, { new: true })
    .then((vehicule) => {
      console.log("Updating cars ->", vehicule);
      res.status(204).json(vehicule);
    })
    .catch((error) => {
      console.error("Error while updating cars ->", error);
      next(error);
    });
});

router.delete("/:vehiculeId", isAuthenticated, isAdmin, (req, res) => {
  const { vehiculeId } = req.params;
  Vehicule.findByIdAndDelete(vehiculeId)
    .then((vehicule) => {
      console.log("Deleting cars ->", vehicule);
      res.status(204).send();
    })
    .catch((error) => {
      console.error("Error while deleting cars ->", error);
      next(error);
    });
});

console.log("vehicules");

module.exports = router;
