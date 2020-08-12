const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// User Model
const User = require("../../models/User");

// @route   POST api/users
// @desc    Register new user
// @access  Private
router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  // Simple Validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for exixisting user
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({
      name,
      email,
      password,
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          res.json({
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          });
        });
      });
    });
  });
});

module.exports = router;

// try {
//   const users = await User.find();
//   if (!users) throw Error("No users exist");
//   res.json(users);
// } catch (e) {
//   res.status(400).json({ msg: e.message });
// }
