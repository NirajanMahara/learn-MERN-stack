const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

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
    } else if (password != cpassword) {
      return res.status(422).json({ error: 'Password not matching !' });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });

      //   Hash working here

      await user.save();

      res.status(201).json({ message: 'User registered successfully !' });
    }
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

    const userLogin = await User.findOne({ email: email });

    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        res.status(400).json({ error: 'Invalid Credentials <Password> !' });
      } else {
        res.json({ message: 'User Signed in successfully !' });
      }
    } else {
      res.status(400).json({ error: 'Invalid Credentials <Email> !' });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
