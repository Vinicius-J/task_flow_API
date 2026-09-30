const InMemoryTaskRepository = require("../data/InMemoryTaskRepository.js");
const FindAllTasksService = require("../services/FindAllTasksService.js");

function makeFindAllTasksService() {
  const repository = InMemoryTaskRepository;

  return FindAllTasksService(repository);
}

module.exports = makeFindAllTasksService;
