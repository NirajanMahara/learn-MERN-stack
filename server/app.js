const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');

// const User = require('./model/userSchema');

// Middleware
const middleware = (req, res, next) => {
  console.log(`Hello from Middleware !`);
  next();
};

app.get('/', (req, res) => {
  res.send(`Hello from HOME server !!!`);
});

app.get('/about', middleware, (req, res) => {
  console.log(`HEllO ABOUT !`);
  res.send(`Hello from ABOUT server !!!`);
});

app.get('/signin', (req, res) => {
  res.send(`Hello from LOGIN server !!!`);
});

app.get('/signup', (req, res) => {
  res.send(`Hello from REGISTER server !!!`);
});

app.get('/contact', (req, res) => {
  res.send(`Hello from CONTACT server !!!`);
});

// Running Server PORT
const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on ${port} !`));
