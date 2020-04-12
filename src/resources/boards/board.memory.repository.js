const data = [];

const getAll = async () => {
  return data;
};

const getBoard = async id => {
  return data.find(item => item.id === id);
};

const addBoard = async params => {
  await data.push({ ...params });
  return getBoard(params.id);
};

const updateBoard = async (id, params) => {
  const index = data.findIndex(item => item.id === id);
  data.splice(index, 1, { id, ...params });
  return getBoard(id);
};

const deleteBoard = async id => {
  if (!getBoard(id)) return false;
  const index = data.findIndex(item => item.id === id);
  data.splice(index, 1);
  return true;
};

module.exports = { getAll, getBoard, addBoard, updateBoard, deleteBoard };
