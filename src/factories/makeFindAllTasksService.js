import InMemoryTaskRepository from "../data/InMemoryTaskRepository.js";
import { FindAllTasksService } from "../services/FindAllTasksService.js";

export function makeFindAllTasksService() {
  const repository = InMemoryTaskRepository;
  return new FindAllTasksService(repository);
}
