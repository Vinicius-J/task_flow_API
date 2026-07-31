import InMemoryTaskRepository from "../data/InMemoryTaskRepository.js";
import { FindTaskByIdService } from "../services/FindTaskByIdService.js";

export function makeFindTaskByIdService() {
  const repository = InMemoryTaskRepository;
  return new FindTaskByIdService(repository);
}
