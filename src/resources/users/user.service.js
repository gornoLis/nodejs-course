const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getUser = id => usersRepo.getUser(id);

// create user
const addUser = (id, params) => usersRepo.addUser(id, params);

const updateUser = (id, params) => usersRepo.updateUser(id, params);

const deleteUser = id => usersRepo.deleteUser(id);

module.exports = { getAll, getUser, addUser, updateUser, deleteUser };
