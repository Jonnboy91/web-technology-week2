// Controller
'use strict';
const userModel = require('../models/userModel');

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
