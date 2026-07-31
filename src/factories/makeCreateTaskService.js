import InMemoryTaskRepository from "../data/InMemoryTaskRepository.js";
import { CreateTaskService } from "../services/CreateTaskService.js";

export function makeCreateTaskService() {
  const repository = InMemoryTaskRepository;
  return new CreateTaskService(repository);
}
