'use strict';

const express = require('express');
const app = express();
const port = 3000;
const catRouter = require('./routes/catRouter');
const userRouter = require('./routes/userRouter');

app.use(express.static('public'));
//app.use(express.json()); // for parsing application/json (No need for this testing, but for the future parsing json)
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World test!');
});

app.use('/cat', catRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});