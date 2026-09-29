const express = require("express");

const taskRoutes = require("../routes/task.routes.js");

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", taskRoutes);
  }
}

const app = new App().app;

module.exports = app;
