const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  user: { type: ObjectId, required: true },

  vehicule: { type: ObjectId, required: true },

  content: { type: String, required: true },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
