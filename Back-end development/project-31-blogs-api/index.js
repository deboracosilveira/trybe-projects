const express = require('express');
const UsersController = require('./controllers/usersController');
const loginController = require('./controllers/loginController');
const postsController = require('./controllers/postsController');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(express.json());

app.use('/user', UsersController);
app.use('/login', loginController);
app.use('/post', postsController);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
