const router = require('express').Router();
const createError = require('http-errors');
const User = require('./user.model');
const usersService = require('./user.service');

router
  .route('/')
  .get(async (req, res) => {
    const users = await usersService.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(users.map(User.toResponse));
  })
  .post(async (req, res, next) => {
    try {
      const user = await usersService.addUser(req.body);
      res.status(200).json(User.toResponse(user));
    } catch (error) {
      return next(createError.BadRequest());
    }
  });

router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
      const user = await usersService.getUser(req.params.id);
      res.status(200).json(User.toResponse(user));
    } catch (error) {
      return next(createError.NotFound());
    }
  })
  .put(async (req, res, next) => {
    try {
      const user = await usersService.updateUser(req.params.id, req.body);
      res.status(200).json(User.toResponse(user));
    } catch (error) {
      return next(createError.BadRequest());
    }
  })
  .delete(async (req, res, next) => {
    try {
      await usersService.deleteUser(req.params.id);
      res.status(204).end('The user has been deleted');
    } catch (error) {
      return next(createError.NotFound());
    }
  });

module.exports = router;
