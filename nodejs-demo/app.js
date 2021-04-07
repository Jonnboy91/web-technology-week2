'use strict';

const express = require('express');
const app = express();
const port = 3000;
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const passport = require('./utils/pass');
const authRoute = require('./routes/authRoute')

app.use(express.static('public')); // Define public folder
app.use(express.static('uploads')); // Define uploads folder

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World test!');
});

app.use('/auth', authRoute);
app.use('/cat', passport.authenticate('jwt', {session: false}), catRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), userRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});