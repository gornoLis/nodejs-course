const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const uuid = require('uuid');

router
  .route('/')
  .get(async (req, res) => {
    const users = await usersService.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(users.map(User.toResponse));
  })
  .post((req, res) => {
    const user = usersService.addUser(uuid(), req.body);
    if (user) {
      res.json(User.toResponse(user));
      res.status(200);
      res.end('The user has been created');
    } else {
      res.status(404);
      res.end('User not found');
    }
  });

router
  .route('/:id')
  .get((req, res) => {
    const user = usersService.getUser(req.params.id);
    if (user) {
      res.status(200);
      res.json(User.toResponse(user));
    } else {
      res.status(404);
      res.end('User not found');
    }
  })
  .put((req, res) => {
    const user = usersService.updateUser(req.params.id, req.body);
    if (user) {
      res.status(200);
      res.json(User.toResponse(user));
      res.end('The user has been updated.');
    } else {
      res.status(404);
      res.end('Bad request');
    }
  })
  .delete((req, res) => {
    const existUser = usersService.deleteUser(req.params.id);
    if (existUser) {
      res.status(204);
      res.end('The user has been deleted');
    } else {
      res.status(404);
      res.end('User not found');
    }
  });

module.exports = router;
