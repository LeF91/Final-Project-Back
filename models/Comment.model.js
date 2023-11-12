const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: "User" },

  vehicule: { type: Schema.Types.ObjectId, required: true, ref: "Vehicule" },

  content: { type: String, required: true },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
