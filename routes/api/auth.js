const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const { body, validationResult } = require("express-validator");

// User Model
const User = require("../../models/User");

// @route   POST api/auth/login
// @desc    REGISTER user
// @access  Public
router.post(
  "/register",
  [
    body("name").isEmpty(),
    // Check if email is valid & normalize it
    body("email").isEmpty().isEmail().normalizeEmail(),
    // Check if password is at least 5 chars long
    body("password").isEmpty().isLength({ min: 5 }),
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if user exists by email
    await User.findOne({ email: req.body.email }).then((user) => {
      if (user)
        return Promise.reject(
          res.status(400).json({ msg: "User already exists" })
        );
    });

    // Create salt & hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const newUser = User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    try {
      const savedUser = await newUser.save();
      res.send({ user_id: savedUser._id, email: savedUser.email });
    } catch (err) {
      res.status(400).send(err);
    }
  }
);

// @route   POST api/auth/login
// @desc    LOGIN user
// @access  Public
router.post(
  "/login",
  [
    // Check if email is valid & normalize it
    body("email").isEmail().normalizeEmail(),
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    // Check if password is correct
    const correctPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!correctPassword)
      return res.status(400).json({ msg: "Incorrect Password" });

    //Create and assign token
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: 3600,
      }
    );
    res.header("x-auth_token", token).send("Token Assigned!");
  }
);

//@route   GET api/auth/user
//@desc    Get user data
//@access  Private
router.get("/user", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) throw Error("User Does not exist");
    res.json(user);
  } catch (err) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
