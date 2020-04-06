const usersRepo = require('./user.memory.repository');
const User = require('./user.model');
const tasksService = require('../tasks/task.service');

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

const deleteUser = id => {
  const tasks = tasksService.getTaskByUserId(id);
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].userId = null;
    tasksService.updateTask(tasks[i].id, tasks[i].boardId, tasks[i]);
  }
  const isDeleted = usersRepo.deleteUser(id);
  return isDeleted;
};

module.exports = { getAll, getUser, addUser, updateUser, deleteUser };
