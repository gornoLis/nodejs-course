const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const getUser = id => usersRepo.getUser(id);

// create user
const addUser = params => {
  const user = new User({
    name: params.name,
    login: params.login,
    password: params.password
  });
  return usersRepo.addUser(user);
};

const updateUser = (id, params) => usersRepo.updateUser(id, params);

const deleteUser = id => usersRepo.deleteUser(id);

module.exports = { getAll, getUser, addUser, updateUser, deleteUser };
