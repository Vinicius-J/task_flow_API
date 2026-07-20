import { request, response } from "express";
import { CreateTask } from "../services/createTask.js";

export class TaskController {
  async index(req, res) {
    try {
      return res.status(200).json({ message: "Task" });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async store(req, res) {
    try {
      const { task } = req.body;
      const createTask = new CreateTask();
      const tasks = await createTask.execute(task);
      return res
        .status(200)
        .json({ message: "Task successfully created", task });
    } catch (err) {
      return res.status(400).json({ errorMessage: err.message });
    }
  }
}
