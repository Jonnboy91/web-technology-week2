// 'use strict'; module is strict by default

const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const catController = require('../controllers/catController');

router.route('/').
    get(catController.cat_list_get).
    post(upload.single('filename'), catController.cat_post_new_cat);

router.route('/:id').get(catController.cat_get_by_id).put((req, res) => {
  console.log('put cat', req.params);
  res.send(`put cat with id ${req.params.id}!`);
}).delete((req, res) => {
  console.log('delete cat', req.params);
  res.send(`delete cat with id ${req.params.id}!`);
});

module.exports = router;