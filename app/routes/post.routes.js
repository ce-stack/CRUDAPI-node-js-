module.exports = app => {
    const posts = require("../contraollers/post.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Posts
    router.post("/", posts.createPost);
  
    // Retrieve all Postss
    router.get("/", posts.findAll);
  
    // Retrieve all published Postss
    router.get("/published", posts.findAllPublished);
  
    // Retrieve a single Posts with id
    router.get("/:id", posts.findOne);
  
    // Update a Posts with id
    router.put("/:id", posts.update);
  
    // Delete a Posts with id
    router.delete("/:id", posts.delete);
  
    // Delete all Postss
    router.delete("/", posts.deleteAll);
  
    app.use('/api/posts', router);
  };