const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model.js');

const getTaskByBoardId = boardId => tasksRepo.getTaskByBoardId(boardId);

const getTaskByBoardIdTaskId = (taskId, boardId) =>
  tasksRepo.getTaskByBoardIdTaskId(taskId, boardId);

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

const deleteTask = id => tasksRepo.deleteTask(id);

module.exports = {
  getTaskByBoardId,
  getTaskByBoardIdTaskId,
  getTaskByUserId,
  addTask,
  updateTask,
  deleteTask
};
