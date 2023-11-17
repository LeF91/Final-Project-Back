const router = require("express").Router();
const Comment = require("./../models/Comment.model");

router.get("/:vehiculeId", (req, res, next) => {
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

router.post("/:vehiculeId", async (req, res, next) => {
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

router.put("/:commentId", (req, res, next) => {
  Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedComment) => {
      res.json(updatedComment);
    })
    .catch((error) => {
      next(error);
    });
});

router.delete("/:commentId", (req, res, next) => {
  Comment.findByIdAndDelete(req.params.id, { new: true })
    .then(() => {
      res.status(200).json();
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
