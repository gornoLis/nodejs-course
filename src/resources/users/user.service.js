const usersRepo = require('./user.db.repository');
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
    const { _id, boardId } = tasks[i];
    tasksService.updateTask(_id, boardId, { ...tasks[i], userId: null });
  }
  const deletedCount = usersRepo.deleteUser(userId);
  return deletedCount;
};

module.exports = { getAll, getUser, addUser, updateUser, deleteUser };
