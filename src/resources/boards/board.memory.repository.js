const data = [
  {
    id: '55',
    title: 'board',
    columns: [{ id: '45353', title: 'column', order: 0 }]
  }
];

const getAll = async () => {
  return data;
};

const getBoard = id => {
  return data.find(item => item.id === id);
};

const addBoard = params => {
  const { id, title, columns } = params;
  data.push({
    id,
    title,
    columns
  });
  return getBoard(id);
};

// TODO не изменить id column
// TODO изменить columns,если найден id
const updateBoard = (id, params) => {
  const { title, columns } = params;
  const index = data.findIndex(item => item.id === id);
  data.splice(index, 1, {
    id,
    title,
    columns
  });
  return getBoard(id);
};

const deleteBoard = id => {
  if (!getBoard(id)) return false;
  const index = data.findIndex(item => item.id === id);
  data.splice(index, 1);
  return true;
};

module.exports = { getAll, getBoard, addBoard, updateBoard, deleteBoard };