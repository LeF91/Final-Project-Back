const router = require("express").Router();
const Comment = require("../models/Comment.model");

app.get("/api/comments", (req, res) => {
  Comment.find({})
    .then((comments) => {
      console.log("Retrieved cars", comments);
      res.json(comments);
    })
    .catch((error) => {
      console.log(error, "Error to find cars", error);
      res.status(500).send({ error: "Failed to retrieve cars" });
    });
});

app.post("/api/comments", async (req, res, next) => {
  const comment = { ...req.body };
  Comment.create(comment)
    .then((createdcomment) => {
      res.status(201).json(createdcomment);
      console.log("Car created");
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get("/api/comment/:commentId", async (req, res) => {
  const { commentId } = req.params;
  Comment.findById(commentId)
    .then((comment) => {
      console.log("Retrieved comment ->", comment);
      res.status(200).json(comment);
    })
    .catch((error) => {
      console.log(error, "Error to find cars", error);
      res.status(500).send({ error: "Failed to retrieve cars" });
    });
});

app.put("/api/comments/:commentId", (req, res) => {
  const { commentId } = req.params;
  Comment.findByIdAndUpdate(commentId, req.body, { new: true })
    .then((comment) => {
      console.log("Updating cars ->", comment);
      res.status(204).json(comment);
    })
    .catch((error) => {
      console.error("Error while updating cars ->", error);
      res.status(500).send({ error: "Failed to update cars" });
    });
});

app.delete("/api/comments/:commentId", (req, res) => {
  const { commentId } = req.params;
  Comment.findByIdAndDelete(commentId)
    .then((comment) => {
      console.log("Deleting cars ->", comment);
      res.status(204).send();
    })
    .catch((error) => {
      console.error("Error while deleting cars ->", error);
      res.status(500).send({ error: "Failed to delete cars" });
    });
});
