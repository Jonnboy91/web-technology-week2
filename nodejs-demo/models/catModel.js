'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner name too.
    const [rows] = await promisePool.query('SELECT wop_cat.*, wop_user.name AS ownername FROM wop_cat, wop_user WHERE wop_cat.owner = wop_user.user_id');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const getAllCatsSort = async (order) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner name too.
    const [rows] = await promisePool.query(`SELECT * FROM wop_cat ORDER BY ${order}`);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const insertCat = async (cat) => {
  const [row] = await promisePool.execute('INSERT INTO wop_cat (name, age, weight, owner, filename) VALUES (?, ?, ?, ?, ?)', [cat.name, cat.age, cat.weight, cat.owner, cat.filename]);
  console.log('insert row', row)
  return row.insertId;
};

const updateCat = async (cat) => {
  const [row] = await promisePool.execute('UPDATE `wop_cat` SET `name`=?, `age`=?, `weight`=?, `owner`=? WHERE cat_id=?', [cat.name, cat.age, cat.weight, cat.owner, cat.id]);
  console.log('update row', row);
  return true;
}

const deleteCat = async (id) => {
  const [row] = await promisePool.execute('DELETE FROM `wop_cat` WHERE cat_id=?', [id]);
  console.log('delete row', row);
  return true;
}

const getCatById = async(id) =>{
  try{
    const [row] = await promisePool.query('SELECT * FROM `wop_cat` WHERE cat_id=?', [id]);
    return row;
  }catch (e) {
    console.error('error', e.message);
  }

}

module.exports = {
  getAllCats,
  getAllCatsSort,
  insertCat,
  updateCat,
  deleteCat,
  getCatById,
};
