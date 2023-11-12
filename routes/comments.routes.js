const router = require("express").Router();
const Comment = require("../models/Comment.model");
const { isAuthenticated } = require("../middleware/authMiddlewares");

router.use(isAuthenticated);

// modifier la get pour commentaire
router.get("/:carId", (req, res) => {
  Comment.find({ vehicule: req.params.carId })
    .then((comments) => {
      console.log("Retrieved cars", comments);
      res.json(comments);
    })
    .catch((error) => {
      console.log(error, "Error to find cars", error);
      next(error);
    });
});

router.post("/:carId", async (req, res, next) => {
  const comment = { ...req.body };
  comment.user = req.userId;
  comment.vehicule = req.params.carId;
  Comment.create(comment)
    .then((createdcomment) => {
      res.status(201).json(createdcomment);
      console.log("Car created");
    })
    .catch((error) => {
      next(error);
    });
});

// router.get("/:commentId", async (req, res) => {
//   const { commentId } = req.params;
//   Comment.findById(commentId)
//     .then((comment) => {
//       console.log("Retrieved comment ->", comment);
//       res.status(200).json(comment);
//     })
//     .catch((error) => {
//       console.log(error, "Error to find cars", error);
//       res.status(500).send({ error: "Failed to retrieve cars" });
//     });
// });

router.put("/:commentId", (req, res) => {
  const { commentId } = req.params;
  Comment.findOneAndUpdate({ user: req.userId, _id: commentId }, req.body, {
    new: true,
  })
    .then((comment) => {
      console.log("Updating cars ->", comment);
      res.status(204).json(comment);
    })
    .catch((error) => {
      console.error("Error while updating cars ->", error);
      next(error);
    });
});

router.delete("/:commentId", (req, res) => {
  const { commentId } = req.params;
  Comment.findOnedAndDelete({ user: req.userId, _id: commentId })
    .then((comment) => {
      console.log("Deleting cars ->", comment);
      res.status(204).send();
    })
    .catch((error) => {
      console.error("Error while deleting cars ->", error);
      next(error);
    });
});

module.exports = router;
