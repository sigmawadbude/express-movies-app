const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.registerUser = async ({ username, password }) => {
  const existingUser = await User.findOne({ username });
  if (existingUser) throw new Error('Username already exists');
  const user = new User({ username, password });
  await user.save();
  return { message: 'User registered successfully' };
};

exports.loginUser = async ({ username, password }) => {
  const user = await User.findOne({ username });
  if (!user || !(await user.comparePassword(password))) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  return { token };
};
