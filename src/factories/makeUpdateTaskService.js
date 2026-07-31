import InMemoryTaskRepository from "../data/InMemoryTaskRepository.js";
import { UpdateTaskService } from "../services/UpdateTaskService.js";

export function makeUpdateTaskService() {
  const repository = InMemoryTaskRepository;
  return new UpdateTaskService(repository);
}
