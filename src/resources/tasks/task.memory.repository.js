const data = [];

const getTaskByBoardId = boardId => {
  return data.find(item => item.boardId === boardId);
};

const getTaskByBoardIdTaskId = (boardId, taskId) => {
  return data.find(item => item.boardId === boardId && item.id === taskId);
};

const addTask = params => {
  const { id, title, order, description, userid, boardId, columnId } = params;
  data.push({
    id,
    title,
    order,
    description,
    userid,
    boardId,
    columnId
  });
  return getTaskByBoardId(params.boardId);
};

// const updateTask = (id, params) => {};

const deleteTask = (boardId, taskId) => {
  if (!getTaskByBoardIdTaskId(boardId, taskId)) return false;
  const index = data.findIndex(
    item => item.boardId === boardId && item.id === taskId
  );
  data.splice(index, 1);
  return true;
};
module.exports = {
  getTaskByBoardId,
  getTaskByBoardIdTaskId,
  addTask,
  deleteTask
};
