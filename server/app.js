const mongoose = require('mongoose');
const express = require('express');
const app = express();

const DB =
  'mongodb+srv://nirajan:Nima1million$@cluster0.s3tl3.mongodb.net/mernstack?retryWrites=true&w=majority';

// MongoDB Connection
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`MongoDB Connected !`);
  })
  .catch((error) => console.error(error));

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
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port} !`));
