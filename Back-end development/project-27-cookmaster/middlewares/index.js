const { authMiddleware } = require('./auth');
const { validationMiddleware } = require('./validation');

module.exports = {
  auth: authMiddleware,
  validation: validationMiddleware,
};
