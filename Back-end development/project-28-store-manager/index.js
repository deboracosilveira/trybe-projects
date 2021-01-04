const express = require('express');

const app = express();
const port = 3000;
const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');

app.use(express.json());
app.use('/products', productsController);
app.use('/sales', salesController);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
app.listen(port, () => console.log('Listening on port 3000'));
