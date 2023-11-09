const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, required: true },

  vehicule: { type: Schema.Types.ObjectId, required: true },

  content: { type: String, required: true },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
