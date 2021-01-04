const connection = require('./connection');

/* Quando você implementar a conexão com o banco, não deve mais precisar desse objeto */
// const TEMP_USER = {
//   id: 'd2a667c4-432d-4dd5-8ab1-b51e88ddb5fe',
//   email: 'taylor.doe@company.com',
//   password: 'password',
//   name: 'Taylor',
//   lastName: 'Doe',
// };

/* Substitua o código das funções abaixo para que ela,
de fato, realize a busca no banco de dados */

// /**
//  * Busca um usuário através do seu email e, se encontrado, retorna-o.
//  * @param {string} email Email do usuário a ser encontrado
//  */
const findByEmail = async (userEmail) => {
  const db = await connection();
  const results = await db
    .getTable('users')
    .select(['id', 'email', 'password', 'first_name', 'last_name'])
    .where('email = :email_param')
    .bind('email_param', userEmail)
    .execute();

  const fetchResults = await results.fetchOne();
  const [id, email, password, name, lastName] = fetchResults;
  return {
    id,
    email,
    password,
    name,
    lastName,
  };
};

// /**
//  * Busca um usuário através do seu ID
//  * @param {string} id ID do usuário
//  */
const findById = async (userId) => {
  const db = await connection();
  const results = await db
    .getTable('users')
    .select(['id', 'email', 'password', 'first_name', 'last_name'])
    .where('id = :id')
    .bind('id', userId)
    .execute();

  const fetchResults = await results.fetchOne();
  const [id, email, password, name, lastName] = fetchResults;
  return {
    id,
    email,
    password,
    name,
    lastName,
  };
};

const addUser = async ({ email, password, firstName, lastName }) => {
  const db = await connection();
  await db
    .getTable('users')
    .insert(['email', 'password', 'first_name', 'last_name'])
    .values(email, password, firstName, lastName)
    .execute();
  return true;
};

const emailCheck = (userEmail) => /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i.test(userEmail);

const passwordCheck = (userPass) => /^(\d|\w){6,}$/.test(userPass);

const confirmPassCheck = (firstpass, secondPass) => firstpass === secondPass;

const nameCheck = (userName) => /\w{3,}/.test(userName);

const isValid = {
  emailCheck,
  passwordCheck,
  confirmPassCheck,
  nameCheck,
};

module.exports = {
  findByEmail,
  findById,
  addUser,
  isValid,
};
