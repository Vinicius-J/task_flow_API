const Router = require("express");
const TaskController = require("../controller/task.controller.js");

const taskRoutes = Router();
const controller = TaskController();

taskRoutes.get("/", controller.index);
taskRoutes.post("/tasks", controller.store);
taskRoutes.get("/tasks/:id", controller.show);
taskRoutes.put("/tasks/:id", controller.update);
taskRoutes.delete("/tasks/:id", controller.deleteTask);

module.exports = taskRoutes;
