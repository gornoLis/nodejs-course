const usersRepo = require('./user.memory.repository');
const User = require('./user.model');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();

const getUser = id => usersRepo.getUser(id);

// create user
const addUser = params => usersRepo.addUser(new User({ ...params }));

const updateUser = (id, params) => usersRepo.updateUser(id, params);

const deleteUser = async userId => {
  const tasks = await tasksService.getTaskByUserId(userId);
  for (let i = 0; i < tasks.length; i++) {
    const { id, boardId } = tasks[i];
    tasksService.updateTask(id, boardId, { ...tasks[i], userId: null });
  }
  const isDeleted = usersRepo.deleteUser(userId);
  return isDeleted;
};

module.exports = { getAll, getUser, addUser, updateUser, deleteUser };
