import React, { Component } from 'react';

class CartProduct extends Component {
  render() {
    const { addToCart, subFromCart, removeFromCart, cartProduct } = this.props;
    const { title, price, thumbnail, cartQuantity } = cartProduct;

    return (
      <div>
        <img src={thumbnail} alt={title} />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={() => subFromCart(cartProduct)}
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">Quantidade do produto: {cartQuantity}</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={() => addToCart(cartProduct)}
        >
          +
        </button>
        <p>Preço total do item: R${price * cartQuantity}</p>
        <button type="button" onClick={() => removeFromCart(cartProduct)}>
          Remover do Carrinho
        </button>
      </div>
    );
  }
}

export default CartProduct;
