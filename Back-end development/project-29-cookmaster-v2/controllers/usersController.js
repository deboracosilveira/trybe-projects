const express = require('express');
const userValidations = require('../middlewares/userValidation');
const model = require('../models/model');

const router = express.Router();

// Add new user
router.post(
  '/',
  userValidations.validateFields,
  userValidations.validateEmail,
  userValidations.validateEmailIsUnique,
  async (req, res) => {
    try {
      const { name, email, password, role = 'user' } = req.body;
      const user = await model.add('users', { name, email, password, role });

      res.status(201).json({ user });
    } catch (_e) {
      res.status(501).json({ message: 'Failed to register user!' });
    }
  },
);

module.exports = router;
