const router = require('express').Router();
const boardsService = require('./board.service');

router
  .route('/')
  .get(async (req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards);
  })
  .post(async (req, res) => {
    const board = await boardsService.addBoard(req.body);
    if (board) {
      res.status(200).json(board);
    } else {
      res.status(400).end('Bad request');
    }
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const board = await boardsService.getBoard(req.params.id);
    if (board) {
      res.status(200).json(board);
    } else {
      res.status(404).end('Board not found');
    }
  })
  .put(async (req, res) => {
    const board = await boardsService.updateBoard(req.params.id, req.body);
    if (board) {
      res.status(200).json(board);
    } else {
      res.status(400).end('Bad request');
    }
  })
  .delete(async (req, res) => {
    const isDeleted = await boardsService.deleteBoard(req.params.id);
    if (isDeleted) {
      res.status(204).end('The board has been deleted');
    } else {
      res.status(404).end('Board not found');
    }
  });

module.exports = router;
