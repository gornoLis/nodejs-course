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

const getUser = id => data.find(one => one.id === id);

const addUser = async user => {
  await data.push({ ...user });
  return getUser(user.id);
};

const updateUser = async (id, params) => {
  const index = data.findIndex(item => item.id === id);
  await data.splice(index, 1, { id, ...params });
  return getUser(id);
};

const deleteUser = id => {
  if (!getUser(id)) return false;

  const index = data.findIndex(item => item.id === id);
  if (data.splice(index, 1)) {
    return true;
  }
  return false;
};

module.exports = { getAll, getUser, addUser, updateUser, deleteUser };
