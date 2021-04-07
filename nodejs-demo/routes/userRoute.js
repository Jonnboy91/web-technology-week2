// 'use strict'; module is strict by default

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {body} = require('express-validator');

router.route('/').
    get(userController.user_list_get).
    post(
        body('name').isLength({min: 3}),
        body('email').isEmail(),
        body('password').isStrongPassword({minLength: 8, minUppercase: 1}),
        userController.user_post_new_user);

router.route('/:id')
.get(userController.user_get_by_id);

module.exports = router;