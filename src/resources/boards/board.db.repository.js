const Board = require('./board.model');

const getAll = async () => {
  return Board.find({});
};

const getBoard = async id => {
  const board = Board.findById(id);
  return board;
};

const addBoard = async board => {
  return Board.create(board);
};

const updateBoard = async (id, params) => {
  return Board.update({ _id: id }, params);
};

const deleteBoard = async id => {
  return (await Board.deleteOne({ _id: id })).deletedCount;
};

module.exports = { getAll, getBoard, addBoard, updateBoard, deleteBoard };
