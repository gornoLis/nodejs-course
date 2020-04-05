const boardsRepo = require('./board.memory.repository');
const Board = require('./board.model');

const getAll = () => boardsRepo.getAll();

const getBoard = id => boardsRepo.getBoard(id);

const addBoard = params => {
  const { title, columns } = params;
  const board = new Board({
    title,
    columns
  });
  return boardsRepo.addBoard(board);
};

const updateBoard = (id, params) => boardsRepo.updateBoard(id, params);

const deleteBoard = id => boardsRepo.deleteBoard(id);

module.exports = { getAll, getBoard, addBoard, updateBoard, deleteBoard };
