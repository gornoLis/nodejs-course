const data = [
  {
    id: '11',
    title: 'task1',
    order: 0,
    description: 'first task',
    userId: '15',
    boardId: '55',
    columnId: '66'
  },
  {
    id: '222',
    title: 'task2',
    order: 1,
    description: 'second task',
    userId: '15',
    boardId: '55',
    columnId: '66'
  }
];

const getTaskByBoardId = boardId =>
  data.filter(item => item.boardId === boardId);

const getTaskByBoardIdTaskId = (boardId, taskId) => {
  return data.find(item => item.id === taskId && item.boardId === boardId);
};

const getTaskByUserId = userId => data.filter(item => item.userId === userId);

const addTask = params => {
  const { id, title, order, description, userId, boardId, columnId } = params;
  data.push({
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  });
  return getTaskByBoardIdTaskId(boardId, id);
};

const updateTask = (id, boardId, params) => {
  const { title, order, description, userId, columnId } = params;
  const index = data.findIndex(
    item => item.id === id && item.boardId === boardId
  );
  data.splice(index, 1, {
    id,
    title,
    order,
    description,
    boardId,
    userId,
    columnId
  });
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
