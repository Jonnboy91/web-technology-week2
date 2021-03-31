// Controller
'use strict';
const userModel = require('../models/userModel');
const {validationResult} = require('express-validator');

const user_list_get = async (req, res) => {
  console.log('get all users from controllers', req.query);
  const users = await userModel.getAllUsers();
  res.json(users);
};

const user_get_by_id = async (req, res) => {
  console.log('get user by id', req.params.id)
  const [user] = await userModel.getUserById(req.params.id);
  res.json(user);
};

const user_post_new_user = async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  console.log('post user', req.body);
  const user = req.body;
  const userId = await userModel.insertUser(user);
  user.id = userId
  res.json(user);
};

module.exports = {
  user_list_get,
  user_get_by_id,
  user_post_new_user,
};
