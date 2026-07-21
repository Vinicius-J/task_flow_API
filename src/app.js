import express from "express";

import taskRoutes from "./routes/task.routes.js";

class App {
  app;
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
    this.app.use("/tasks", taskRoutes);
  }
}

export default new App().app;
