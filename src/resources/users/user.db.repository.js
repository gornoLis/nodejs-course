const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const getUser = id => User.findById(id);

const addUser = async user => User.create(user);

const updateUser = async (id, params) => {
  return User.updateOne({ _id: id }, params);
};

const deleteUser = async id => {
  return (await User.deleteOne({ _id: id })).deletedCount;
};

module.exports = { getAll, getUser, addUser, updateUser, deleteUser };
