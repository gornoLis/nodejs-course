const router = require('express').Router();
const boardsService = require('./board.service');

router
  .route('/')
  .get(async (req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards);
  })
  .post((req, res) => {
    /* const a = req.body;
		console.log(columns(a.columns));*/
    const board = boardsService.addBoard(req.body);
    if (board) {
      res.status(200).json(board);
    } else {
      res.status(400).end('Bad request');
    }
    res.end('aa');
  });

router
  .route('/:id')
  .get((req, res) => {
    const board = boardsService.getBoard(req.params.id);
    if (board) {
      res.status(200).json(board);
    } else {
      res.status(404).end('Board not found');
    }
  })
  .put((req, res) => {
    const board = boardsService.updateBoard(req.params.id, req.body);
    res.json(board);
  })
  .delete((req, res) => {
    const isDeleted = boardsService.deleteBoard(req.params.id);
    if (isDeleted) {
      res.status(204).end('The board has been deleted');
    } else {
      res.status(404).end('Board not found');
    }
  });

module.exports = router;