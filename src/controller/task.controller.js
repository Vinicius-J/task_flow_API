import { request, response } from "express";

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
      return res.status(200).json({ message: "Task" });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}
