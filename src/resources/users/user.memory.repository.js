const data = [
  {
    id: '3242872f-4afd-45d4-8b9e-88c9d1ba95da',
    name: 'name',
    login: 'user1',
    password: 'safsf2323'
  }
];

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return data;
};

const getUser = id => {
  return data.find(one => one.id === id);
};

const addUser = user => {
  const { id, name, login, password } = user;
  data.push({
    id,
    name,
    login,
    password
  });
  return getUser(id);
};

const updateUser = (id, params) => {
  const { name, login, password } = params;
  const index = data.findIndex(item => item.id === id);
  data.splice(index, 1, {
    id,
    name,
    login,
    password
  });
  return getUser(id);
};

const deleteUser = id => {
  if (!getUser(id)) return false;

  const index = data.findIndex(item => item.id === id);
  data.splice(index, 1);
  return true;
};

module.exports = { getAll, getUser, addUser, updateUser, deleteUser };
