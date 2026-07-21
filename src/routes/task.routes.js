import { Router } from "express";
import { TaskController } from "../controller/task.controller.js";

const taskRoutes = Router();
const controller = new TaskController();

taskRoutes.get("/", controller.index);
taskRoutes.post("/", controller.store);
taskRoutes.get("/:id", controller.show);

export default taskRoutes;
