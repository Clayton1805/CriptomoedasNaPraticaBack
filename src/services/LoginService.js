const { getUserByEmail } = require('../models/RegisterModel');
const { UNAUTHORIZED, OK } = require('../utils/allStatusCode');
const { createToken } = require('../JWT/createToken');
const {
  validateEmail,
  validatePassword,
} = require('../utils/funcValidations');

const LoginServices = async (req, res) => {
  const { email, password } = req.body;

  // const { password: _password, ...userWithoutPassword } = user;
  // const { id: _id, ...userWithoutId } = userWithoutPassword;
  // const token = createToken(userWithoutPassword);
  return res.status(OK).json();
};

module.exports = LoginServices;
