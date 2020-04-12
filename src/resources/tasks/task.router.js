const router = require('express').Router({ mergeParams: true });
const createError = require('http-errors');
const tasksService = require('./task.service');

router
  .route('/')
  .get(async (req, res) => {
    const tasks = await tasksService.getTaskByBoardId(req.params.boardId);
    res.json(tasks);
  })
  .post(async (req, res, next) => {
    try {
      const task = await tasksService.addTask(req.params.boardId, req.body);
      res.json(task);
    } catch (error) {
      return next(createError.BadRequest());
    }
  });

router
  .route('/:taskId')
  .get(async (req, res, next) => {
    try {
      const { boardId, taskId } = req.params;
      const task = await tasksService.getTaskByBoardIdTaskId(boardId, taskId);
      if (task) {
        res.json(task);
      } else {
        return next(createError.NotFound());
      }
    } catch (error) {
      return next(createError.NotFound());
    }
  })
  .put(async (req, res, next) => {
    try {
      const { boardId, taskId } = req.params;
      const task = await tasksService.updateTask(taskId, boardId, req.body);
      res.json(task);
    } catch (error) {
      return next(createError.BadRequest());
    }
  })
  .delete(async (req, res, next) => {
    try {
      const { boardId, taskId } = req.params;
      await tasksService.deleteTask(boardId, taskId);
      res.status(204).end('The task has been deleted');
    } catch (error) {
      return next(createError.NotFound());
    }
  });

module.exports = router;
