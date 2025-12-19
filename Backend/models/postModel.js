const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
},

  caption: String,
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
    product_image: {
      type: String,
      trim: true,
    },
    
},
 {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, data) {
        if (data?.product_image) {
          data.product_image = `${config.base_url}product_images/${data.product_image}`;
        }
      },
    },
  }
);

// module.exports = mongoose.model("Post", postSchema);
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
