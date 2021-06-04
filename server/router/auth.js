const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
  res.send(`Hello from HOME router !!!`);
});

router.post('/register', async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: 'Fill all fields properly !' });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: 'Email already exist !' });
    }

    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      cpassword,
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully !' });
  } catch (error) {
    console.log(error);
  }
});

// Login Route

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Fill the credentials !' });
    }

    const userEmail = await User.findOne({ email: email });

    console.log(userEmail);

    if (!userEmail) {
      res.status(400).json({ error: 'User Signing in Failed !' });
    } else {
      res.json({ message: 'User Signed in successfully !' });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
