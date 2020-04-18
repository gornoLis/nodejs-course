const router = require('express').Router({ mergeParams: true });
const createError = require('http-errors');
const tasksService = require('./task.service');
const Task = require('./task.model');

router
  .route('/')
  .get(async (req, res) => {
    const tasks = await tasksService.getTaskByBoardId(req.params.boardId);
    res.json(tasks.map(Task.toResponse));
  })
  .post(async (req, res, next) => {
    try {
      const task = await tasksService.addTask(req.params.boardId, req.body);
      res.json(Task.toResponse(task));
    } catch (error) {
      return next(createError.BadRequest());
    }
  });

router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
      const { boardId, id } = req.params;
      const task = await tasksService.getTaskByBoardIdTaskId(boardId, id);
      if (task) {
        res.json(Task.toResponse(task));
      } else {
        return next(createError.NotFound());
      }
    } catch (error) {
      return next(createError.NotFound());
    }
  })
  .put(async (req, res, next) => {
    try {
      const { boardId, id } = req.params;
      const task = await tasksService.updateTask(id, boardId, req.body);
      res.json(Task.toResponse(task));
    } catch (error) {
      return next(createError.BadRequest());
    }
  })
  .delete(async (req, res, next) => {
    try {
      const { boardId, id } = req.params;
      const deletedCount = await tasksService.deleteTask(boardId, id);
      if (deletedCount < 1) return next(createError.NotFound());
      res.status(204).end('The task has been deleted');
    } catch (error) {
      return next(createError.NotFound());
    }
  });

module.exports = router;
