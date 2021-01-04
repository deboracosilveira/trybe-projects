const express = require('express');
const userValidations = require('../middlewares/userValidation');
const createToken = require('../auth/createToken');

const router = express.Router();

// Log user in
router.post(
  '/',
  userValidations.validateLoginFields,
  userValidations.validateLogin,
  async (req, res) => {
    try {
      const user = req.user;
      const token = createToken(user);

      return res.status(200).json({ token });
    } catch (_e) {
      res.status(501).json({ message: 'Failed to login!' });
    }
  },
);

module.exports = router;
