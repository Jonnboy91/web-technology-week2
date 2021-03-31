'use strict';

const express = require('express');
const app = express();
const port = 3000;
const catRouter = require('./routes/catRouter');
const userRouter = require('./routes/userRouter');

app.use(express.static('public')); // Define public folder
app.use(express.static('uploads')); // Define public folder

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World test!');
});

app.use('/cat', catRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});