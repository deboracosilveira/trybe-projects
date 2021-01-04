const userModel = require('../models/userModel');

const message = {
  email: 'O email deve ter o formato email@mail.com',
  password: 'A senha deve ter pelo menos 6 caracteres',
  confirmPass: 'As senhas tem que ser iguais',
  firstName: 'O primeiro nome deve ter, no mínimo, 3 caracteres, sendo eles apenas letras',
  lastName: 'O segundo nome deve ter, no mínimo, 3 caracteres, sendo eles apenas letras',
};

const validationMessage = (validationBool, type) => (validationBool ? null : message[type]);

const validationMiddleware = (req, res, next) => {
  const { email, password, passwordConfirm, firstName, lastName } = req.body;
  const { emailCheck, passwordCheck, confirmPassCheck, nameCheck } = userModel.isValid;

  const emailV = emailCheck(email);
  const passV = passwordCheck(password);
  const confirmPassV = confirmPassCheck(password, passwordConfirm);
  const fNameV = nameCheck(firstName);
  const lNameV = nameCheck(lastName);

  if (emailV && passV && confirmPassV && fNameV && lNameV) {
    req.isValid = true;
  } else req.isValid = false;

  req.messages = {
    email: validationMessage(emailV, 'email'),
    password: validationMessage(passV, 'password'),
    confirmPassword: validationMessage(confirmPassV, 'confirmPass'),
    firstName: validationMessage(fNameV, 'firstName'),
    lastName: validationMessage(lNameV, 'lastName'),
  };
  return next();
};

module.exports = {
  validationMiddleware,
};
