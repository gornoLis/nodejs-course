const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');

router
  .route('/')
  .get(async (req, res) => {
    const tasks = await tasksService.getTaskByBoardId(req.params.boardId);
    res.json(tasks);
  })
  .post((req, res) => {
    const task = tasksService.addTask(req.params.boardId, req.body);
    if (task) {
      res.json(task);
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
      res.json(task);
    } else {
      res.end('Bad request');
    }
  })
  .put((req, res) => {
    const { boardId, taskId } = req.params;
    const task = tasksService.updateTask(taskId, boardId, req.body);
    res.json(task);
  })
  .delete((req, res) => {
    const { boardId, taskId } = req.params;
    const isDeleted = tasksService.deleteTask(boardId, taskId);

    if (isDeleted) {
      res.status(204).end('The task has been deleted');
    } else {
      res.status(404).end('Task not found');
    }
  });

module.exports = router;
