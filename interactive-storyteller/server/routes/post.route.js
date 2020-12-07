
module.exports = app => {

  const posts = require("../controllers/post.controller");

  var router = require("express").Router();

  // Create a new post
  router.post("/", posts.create);

  // Retrieve all post
  router.get("/", posts.findAll);

  // Retrieve all published posts
  router.get("/community", posts.findAllPublished);

  app.use('/api/posts', router);
};