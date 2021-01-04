const { Users, Posts } = require('../models');

const validateTitle = async (req, res, next) => {
  const { title } = req.body;
  if (title === undefined) {
    return res.status(400).json({ message: '"title" is required' });
  }
  return next();
};

const validateContent = async (req, res, next) => {
  const { content } = req.body;
  if (content === undefined) {
    return res.status(400).json({ message: '"content" is required' });
  }
  return next();
};

const validatePostAuthor = async (req, res, next) => {
  const { id } = req.params;
  const { email } = req.user;

  const user = await Users.findOne({ where: { email } });
  const post = await Posts.findOne({ where: { id } });

  if (user.dataValues.id !== post.dataValues.userId) {
    return res.status(401).json({ message: 'Usuário não autorizado' });
  }

  req.user = { ...req.user, userId: user.dataValues.id };

  return next();
};

module.exports = { validateTitle, validateContent, validatePostAuthor };
