const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`Hello from HOME router !!!`);
});

router.post('/register', (req, res) => {
  console.log(req.body);
  res.json({ message: req.body });
  //   res.send(`Register Route !`)
});

module.exports = router;
