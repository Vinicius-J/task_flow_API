import { Router } from "express";
import { TaskController } from "../controller/task.controller.js";

const taskRoutes = Router();
const controller = new TaskController();

taskRoutes.get("/", controller.index);
taskRoutes.post("/", controller.store);

export default taskRoutes;
