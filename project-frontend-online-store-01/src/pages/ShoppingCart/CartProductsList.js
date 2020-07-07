import React, { Component } from 'react';

import EmptyCart from './EmptyCart';
import CartProduct from './CartProduct';

class CartProductsList extends Component {
  render() {
    const { addToCart, subFromCart, removeFromCart, cartProducts, updateTotal } = this.props;

    if (cartProducts.length < 1) {
      return (
        <div>
          <EmptyCart />
        </div>
      );
    }

    return (
      <div>
        {cartProducts.map((cartProduct) => (
          <CartProduct
            cartProduct={cartProduct}
            addToCart={addToCart}
            subFromCart={subFromCart}
            removeFromCart={removeFromCart}
            updateTotal={updateTotal}
          />
        ))}
      </div>
    );
  }
}

export default CartProductsList;
