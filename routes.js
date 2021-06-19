//File with the configuration of the routes

const posts = require("./posts");
const routes = (app) => {
  app.use("/", posts);
};

module.exports = routes;
