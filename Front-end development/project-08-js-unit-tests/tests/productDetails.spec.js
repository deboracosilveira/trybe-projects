/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(typeof productDetails(), 'object');// Teste que o retorno da função é um array.
    assert.strictEqual(productDetails().length, 2);// Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(typeof productDetails()[0] && typeof productDetails()[1], 'object');// Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.ok(productDetails()[0] !== productDetails()[1]);// Teste que os dois objetos são diferentes entre si.
    assert.ok(productDetails()[0].details.productId.slice(-3) === '123');// (Difícil) Teste que os dois productIds terminam com 123.
    assert.ok(productDetails()[1].details.productId.slice(-3) === '123');
  });
});