const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`Hello from HOME server !!!`);
});

app.get('/about', (req, res) => {
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
