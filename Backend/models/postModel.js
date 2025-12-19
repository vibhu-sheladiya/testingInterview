const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
},

  caption: String,
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

// module.exports = mongoose.model("Post", postSchema);
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
