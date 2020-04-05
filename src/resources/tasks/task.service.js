const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model.js');

const getTaskByBoardId = boardId => tasksRepo.getTaskByBoardId(boardId);

const getTaskByBoardIdTaskId = (boardId, taskId) =>
  tasksRepo.getTaskByBoardIdTaskId(boardId, taskId);

const addTask = (boardId, params) => {
  const { title, order, description, userid, columnId } = params;
  const task = new Task({
    title,
    order,
    description,
    userid,
    boardId,
    columnId
  });
  return tasksRepo.addTask(task);
};

const updateTask = (id, params) => {
  tasksRepo.updateTask(id, params);
};

const deleteTask = id => {
  tasksRepo.deleteTask(id);
};

module.exports = {
  getTaskByBoardId,
  getTaskByBoardIdTaskId,
  addTask,
  updateTask,
  deleteTask
};
