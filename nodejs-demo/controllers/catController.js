// Controller
'use strict';
const catModel = require('../models/catModel');

const cats = catModel.getAllCats();

const cat_list_get = async (req, res) => {
  console.log('get all cats from controllers', req.query);
  if (req.query.sort === 'age') {
    const catsSort = await catModel.getAllCatsSort('age');
    res.json(catsSort);
    return;
  }else if (req.query.sort === 'name') {
    const catsSort = await catModel.getAllCatsSort('name');
    res.json(catsSort);
    return;
  }

  const cats = await catModel.getAllCats();
  res.json(cats);
};

const cat_get_by_id = (req, res) => {
  console.log('get cat by id', req.query)
  res.json(cats.find(cat => cat.id === req.params.id))
};

const cat_post_new_cat = async (req, res) => {
  console.log('post cat', req.body);
  const cat = req.body;
  const catId = await catModel.insertCat(cat);
  cat.id = catId
  // res.send(`post cat: ${req.body.name} added`);
  res.json(cat);
}

module.exports = {
  cat_list_get,
  cat_get_by_id,
  cat_post_new_cat,
};
