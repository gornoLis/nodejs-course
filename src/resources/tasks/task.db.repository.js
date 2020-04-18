const Task = require('./task.model.js');

const getTaskByBoardId = async boardId => {
  return await Task.find({ boardId });
};

const getTaskByBoardIdTaskId = async (boardId, taskId) => {
  return await Task.findOne({ _id: taskId, boardId });
};

const getTaskByUserId = async userId => {
  return await Task.find({ userId });
};

const addTask = async params => {
  return await Task.create(params);
};

const updateTask = async (id, boardId, params) => {
  return await Task.update({ _id: id, boardId }, params);
};

const deleteTask = async (boardId, taskId) => {
  return (await Task.deleteOne({ _id: taskId, boardId })).deletedCount;
};
module.exports = {
  getTaskByBoardId,
  getTaskByBoardIdTaskId,
  getTaskByUserId,
  addTask,
  updateTask,
  deleteTask
};
