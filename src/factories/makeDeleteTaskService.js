import InMemoryTaskRepository from "../data/InMemoryTaskRepository.js";
import { DeleteTaskService } from "../services/DeleteTaskService.js";

export function makeDeleteTaskService() {
  const repository = InMemoryTaskRepository;
  return new DeleteTaskService(repository);
}
