const router = require('express').Router();
const createError = require('http-errors');
const boardsService = require('./board.service');
const Board = require('./board.model');

router
  .route('/')
  .get(async (req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards.map(Board.toResponse));
  })
  .post(async (req, res, next) => {
    try {
      const board = await boardsService.addBoard(req.body);
      if (board) {
        res.status(200).json(Board.toResponse(board));
      } else {
        return next(createError.BadRequest());
      }
    } catch (error) {
      return next(createError.BadRequest());
    }
  });

router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
      const board = await boardsService.getBoard(req.params.id);
      if (board) {
        res.status(200).json(Board.toResponse(board));
      } else {
        return next(createError.NotFound());
      }
    } catch (error) {
      return next(createError.NotFound());
    }
  })
  .put(async (req, res, next) => {
    try {
      const board = await boardsService.updateBoard(req.params.id, req.body);
      if (board) {
        res.status(200).json(board);
      } else {
        return next(createError.BadRequest());
      }
    } catch (error) {
      return next(createError.BadRequest());
    }
  })
  .delete(async (req, res, next) => {
    try {
      const deletedCount = await boardsService.deleteBoard(req.params.id);
      if (deletedCount < 1) {
        return next(createError.NotFound());
      }
      res.status(204).end('The board has been deleted');
    } catch (error) {
      return next(createError.NotFound());
    }
  });

module.exports = router;
