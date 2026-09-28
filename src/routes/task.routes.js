const Router = require("express");
const TaskController = require("../controller/task.controller.js");

const taskRoutes = Router();
const controller = new TaskController();

taskRoutes.get("/", controller.index);
taskRoutes.post("/", controller.store);
taskRoutes.get("/:id", controller.show);
taskRoutes.put("/:id", controller.update);
taskRoutes.delete("/:id", controller.delete);

module.exports = taskRoutes;
