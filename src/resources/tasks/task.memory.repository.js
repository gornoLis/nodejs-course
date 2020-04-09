const data = [];

const getTaskByBoardId = boardId =>
  data.filter(item => item.boardId === boardId);

const getTaskByBoardIdTaskId = (boardId, taskId) => {
  return data.find(item => item.id === taskId && item.boardId === boardId);
};

const getTaskByUserId = userId => data.filter(item => item.userId === userId);

const addTask = params => {
  data.push({ ...params });
  return getTaskByBoardIdTaskId(params.boardId, params.id);
};

const updateTask = (id, boardId, params) => {
  const index = data.findIndex(
    item => item.id === id && item.boardId === boardId
  );
  data.splice(index, 1, { id, boardId, ...params });
  return getTaskByBoardIdTaskId(boardId, id);
};

const deleteTask = (boardId, taskId) => {
  if (!getTaskByBoardIdTaskId(boardId, taskId)) return false;

  const index = data.findIndex(
    item => item.boardId === boardId && item.id === taskId
  );
  if (data.splice(index, 1)) {
    return true;
  }
  return false;
};
module.exports = {
  getTaskByBoardId,
  getTaskByBoardIdTaskId,
  getTaskByUserId,
  addTask,
  updateTask,
  deleteTask
};
