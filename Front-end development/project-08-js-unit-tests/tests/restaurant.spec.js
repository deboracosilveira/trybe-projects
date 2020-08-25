/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    // TESTE 1: Verifique que, dado um objeto qualquer passado como um parâmetro para a função createMenu(), checa se o retorno da função é um objeto no seguinte formato: { fetchMenu: objetoQualquer }.
    assert.deepStrictEqual(createMenu('agua').fetchMenu,'agua');// createMenu(objetoQualquer) // Retorno: { fetchMenu: objetoQualquer }
    // --------------------------------------------------------------------------------------
    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, verifique que 'objetoRetornado.fetchMenu' retorna um objeto cujas chaves são somente `food` e `drink`.
    const objetoRetornado = createMenu({ food: {}, drink: {} });
    assert.deepStrictEqual(objetoRetornado.fetchMenu, { food: {}, drink: {} });
    // --------------------------------------------------------------------------------------
    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    const objetoRetornado2 = createMenu({ food: {'coxinha': 3.90, 'sanduiche': 9.90}, drinks: {'agua': 3.90, 'cerveja': 6.90} });
    assert.deepStrictEqual(objetoRetornado2.fetchMenu, { food: {'coxinha': 3.90, 'sanduiche': 9.90}, drinks: {'agua': 3.90, 'cerveja': 6.90} });
    // --------------------------------------------------------------------------------------
    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    assert.deepStrictEqual(objetoRetornado.consumption, []);// objetoRetornado.consumption // Retorno: []
    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    objetoRetornado2.order('coxinha');
    assert.deepStrictEqual(objetoRetornado2.consumption, ['coxinha']);// objetoRetornado.comsuption // Retorno: ["coxinha"]
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    objetoRetornado2.consumption = [];
    objetoRetornado2.order('coxinha');
    objetoRetornado2.order('agua');
    objetoRetornado2.order('sopa');
    objetoRetornado2.order('sashimi');
    assert.deepStrictEqual(objetoRetornado2.consumption, ['coxinha', 'agua', 'sopa', 'sashimi']);// objetoRetornado.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    objetoRetornado2.consumption = [];
    objetoRetornado2.order('coxinha');
    objetoRetornado2.order('agua');
    objetoRetornado2.order('coxinha');
    assert.deepStrictEqual(objetoRetornado2.consumption, ['coxinha', 'agua', 'coxinha'])//objetoRetornado.comsuption // Retorno: ['coxinha', 'agua', 'coxinha']
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    objetoRetornado2.consumption = [];
    objetoRetornado2.order('coxinha');
    objetoRetornado2.order('agua');
    objetoRetornado2.order('coxinha');
    assert.strictEqual(objetoRetornado2.pay(), 12.87)// objetoRetornado.pay() // Retorno: somaDosPreçosDosPedidos
  });
});
