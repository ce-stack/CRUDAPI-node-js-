const mongoose = require("mongoose")
const PostSChema = new mongoose.Schema({
    title: String,
    description: String,
    published: Boolean,
    createdAt: {
      type: Date,
      default: Date.now,
    },

})
  
module.exports = mongoose.model("Post" , PostSChema);