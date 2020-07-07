import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import CartProductsList from './CartProductsList';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalToPay: 0 };
  }

  componentDidMount() {
    this.updateTotal();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.updateTotal();
    }
  }

  updateTotal() {
    const { cartProducts } = this.props;
    if (cartProducts.length >= 1) {
      const result = cartProducts.reduce((acc, curr) => (acc + curr.price) * curr.cartQuantity, 0);
      this.setState({ totalToPay: result });
    }
  }

  render() {
    const { addToCart, subFromCart, removeFromCart, cartProducts } = this.props;
    const { totalToPay } = this.state;

    return (
      <div>
        <div className="shopping-cart-icon ">
          <Link data-testid="shopping-cart-button" to="/shoppingcart">
            <FontAwesomeIcon icon={faShoppingCart} className="faShoppingCart" />
          </Link>
        </div>
        <h1>Carrinho de Compras</h1>
        <CartProductsList
          addToCart={addToCart}
          subFromCart={subFromCart}
          removeFromCart={removeFromCart}
          cartProducts={cartProducts}
        />
        <p>Valor Total da Compra: R${totalToPay}</p>
        <Link to="/checkout">
          <button type="button" data-testid="checkout-products">
            Finalizar Compra
          </button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
