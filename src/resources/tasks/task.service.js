const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model.js');

const getTaskByBoardId = boardId => tasksRepo.getTaskByBoardId(boardId);

const getTaskByBoardIdTaskId = (boardId, taskId) =>
  tasksRepo.getTaskByBoardIdTaskId(boardId, taskId);

const getTaskByUserId = userId => tasksRepo.getTaskByUserId(userId);

const addTask = (boardId, params) => {
  const { title, order, description, userId, columnId } = params;
  const task = new Task({
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  });
  return tasksRepo.addTask(task);
};

const updateTask = (taskId, boardId, params) =>
  tasksRepo.updateTask(taskId, boardId, params);

const deleteTask = (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);

module.exports = {
  getTaskByBoardId,
  getTaskByBoardIdTaskId,
  getTaskByUserId,
  addTask,
  updateTask,
  deleteTask
};
