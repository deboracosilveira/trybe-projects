const express = require('express');
const { Users } = require('../models');
const userValidation = require('../middlewares/userValidation');
const createToken = require('../auth/createToken');
const { validateToken } = require('../auth/validateToken');

const router = express.Router();

router.post(
  '/',
  userValidation.validateDisplayName,
  userValidation.validateEmail,
  userValidation.validatePassword,
  userValidation.validateUserExistence,
  async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const token = createToken({ email, password });

    await Users.create({ displayName, email, password, image });

    return res.status(201).json({ token });
  },
);

router.get('/', validateToken, async (_req, res) => {
  const users = await Users.findAll({ attributes: { exclude: ['password'] } });
  return res.status(200).json(users);
});

router.get('/:id', validateToken, async (req, res) => {
  const { id } = req.params;
  const user = await Users.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) {
    return res.status(404).json({ message: 'Usuário não existe' });
  }
  return res.status(200).json(user);
});
// evaluator
router.delete('/me', validateToken, async (req, res) => {
  const { email } = req.user;
  await Users.destroy({ where: { email } });
  return res.status(204).json({ message: 'Usuário deletado' });
});

module.exports = router;
