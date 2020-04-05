const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router
  .route('/')
  .get(async (req, res) => {
    const tasks = await tasksService.getTaskByBoardId(req.params.boardId);
    res.json(Task.toResponse(tasks));
  })
  .post((req, res) => {
    const task = tasksService.addTask(req.params.boardId, req.body);
    if (task) {
      res.json(Task.toResponse(task));
    } else {
      res.status(400).end('Bad request');
    }
  });
router
  .route('/:taskId')
  .get((req, res) => {
    const { boardId, taskId } = req.params;
    const task = tasksService.getTaskByBoardIdTaskId(boardId, taskId);
    if (task) {
      res.json(Task.toResponse(task));
    } else {
      res.status(400).end('Bad request');
    }
  })
  .put((req, res) => {
    res.end('put');
  })
  .delete((req, res) => {
    res.end('delete');
  });

module.exports = router;
