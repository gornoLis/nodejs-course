const boardsRepo = require('./board.memory.repository');
const Board = require('./board.model');
const tasksService = require('../tasks/task.service');

const getAll = () => boardsRepo.getAll();

const getBoard = id => boardsRepo.getBoard(id);

const addBoard = params => boardsRepo.addBoard(new Board({ ...params }));

const updateBoard = (id, params) => boardsRepo.updateBoard(id, params);

const deleteBoard = async id => {
  if (boardsRepo.getBoard(id)) {
    const tasks = await tasksService.getTaskByBoardId(id);
    for (let i = 0; i < tasks.length; i++) {
      tasksService.deleteTask(id, tasks[i].id);
    }
  }
  return boardsRepo.deleteBoard(id);
};

module.exports = { getAll, getBoard, addBoard, updateBoard, deleteBoard };
