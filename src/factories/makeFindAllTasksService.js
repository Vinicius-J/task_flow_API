const InMemoryTaskRepository = require("../data/InMemoryTaskRepository.js");
const FindAllTasksService = require("../services/FindAllTasksService.js");

function makeFindAllTasksService() {
  const repository = InMemoryTaskRepository;
  return new FindAllTasksService(repository);
}

module.exports = makeFindAllTasksService;
