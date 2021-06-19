const { Router } = require("express");
const router = new Router();
const controller = require("./postController");

//Get all posts
router.get("/", controller.getAllPosts);

//Get single post by ID
router.get("/:id", controller.getSinglePost);

//Delete single phone by ID
router.delete("/:id", controller.deletePost);

//Create post
router.post("/", controller.createPost);

module.exports = router;
