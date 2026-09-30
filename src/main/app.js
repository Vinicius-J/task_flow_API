const express = require("express");

const taskRoutes = require("../routes/task.routes.js");

function createApp() {
  const app = express();

  const middlewares = function () {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
  };

  const routes = function () {
    app.use("/", taskRoutes);
  };

  middlewares();
  routes();

  return app;
}

module.exports = createApp();
