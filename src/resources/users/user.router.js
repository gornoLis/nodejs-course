const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router
  .route('/')
  .get(async (req, res) => {
    const users = await usersService.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(users.map(User.toResponse));
  })
  .post((req, res) => {
    const user = usersService.addUser(req.body);
    if (user) {
      res.status(200).json(User.toResponse(user));
    } else {
      res.status(400).end('Bad request');
    }
  });

router
  .route('/:id')
  .get((req, res) => {
    const user = usersService.getUser(req.params.id);
    if (user) {
      res.status(200).json(User.toResponse(user));
    } else {
      res.status(404).end('User not found');
    }
  })
  .put((req, res) => {
    const user = usersService.updateUser(req.params.id, req.body);
    if (user) {
      res.status(200).json(User.toResponse(user));
    } else {
      res.status(400).end('Bad request');
    }
  })
  .delete((req, res) => {
    const existUser = usersService.deleteUser(req.params.id);
    if (existUser) {
      res.status(204).end('The user has been deleted');
    } else {
      res.status(404).end('User not found');
    }
  });

module.exports = router;
