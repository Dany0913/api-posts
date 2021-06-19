const posts = require("./posts.json");

//Get all posts
const getAllPosts = (_, resp) => {
  resp.json(posts);
};

//Get single post by ID
const getSinglePost = (req, resp) => {
  const { id } = req.params;
  const post = posts.find((item) => item.id === Number(id));
  post ? resp.json(post) : resp.status(404).json(`The id: ${id} doesn't exist`);
};

//Delete single phone by ID
const deletePost = (req, resp) => {
  const { id } = req.params;
  const otherPosts = posts.filter((item) => item.id !== Number(id));
  otherPosts
    ? resp.status(204).json(`The id: ${id} sucessfully deleted`)
    : resp.status(404).json(`The id: ${id} doesn't exist`);
};

//Create post
const createPost = (req, resp) => {
  const newPost = req.body;
  newPost.id = Math.floor(Math.random() * 999999999);
  console.log(newPost);
  if (!newPost.title || !newPost.description) {
    console.log("User name: " + newPost.title + " number: " + newPost.number);
    resp.status(400).json(`Missing property title or description`);
  } else if (posts.filter((item) => item.title === newPost.title).length > 0) {
    resp.status(400).json(`Property title already exists`);
  } else {
    posts.push(newPost);
    resp.status(201).json(`User created with ID: ${newPost.id}`);
  }
};

module.exports = { getAllPosts, getSinglePost, deletePost, createPost };
