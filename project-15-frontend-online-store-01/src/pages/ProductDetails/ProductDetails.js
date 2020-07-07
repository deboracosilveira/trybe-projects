import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { getProductsFromCategoryAndQuery } from '../../services/api';
import Review from './Review';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const product = props.location.state ? props.location.state.product : null;
    this.state = { product, reviewInput: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { product } = this.state;
    if (!product) {
      const { match: { params: { productID } } } = this.props;
      const data = await getProductsFromCategoryAndQuery(null, null, productID);
      this.handleProduct(data);
    }
  }

  handleProduct(data) {
    this.setState({ product: { ...data } });
  }

  cartQuantityRender() {
    const { cartProducts } = this.props;
    const { product: { id } } = this.state;
    const cartProductCheck = () => cartProducts.find((p) => p.id === id);
    const cartQuantity = cartProductCheck()
      ? cartProductCheck().cartQuantity
      : 0;
    return <p>Quantidade no Carrinho: {cartQuantity}</p>;
  }

  buttonsRender() {
    const { addToCart, subFromCart, removeFromCart } = this.props;
    const { product } = this.state;
    return (
      <div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={() => addToCart(product)}
        >
          Adicionar ao Carrinho
        </button>
        <button type="button" onClick={() => subFromCart(product)}>
          Diminuir do Carrinho
        </button>
        <button type="button" onClick={() => removeFromCart(product)}>
          Remover do Carrinho
        </button>
      </div>
    );
  }

  // form handlers

  handleInputChange(e) {
    this.setState({ reviewInput: e.target.value });
  }

  handleSubmit(e) {
    console.log('teste');
    e.preventDefault();
    this.setState({ reviewInput: '' });
  }

  render() {
    if (!this.state.product) {
      return <div>Carregando...</div>;
    }
    const {
      product: { thumbnail, title, price },
      reviewInput,
    } = this.state;
    return (
      <div>
        <div>
          <Link data-testid="shopping-cart-button" to="/shoppingcart">
            <FontAwesomeIcon icon={faShoppingCart} />
            Carrinho de compras
          </Link>
        </div>
        <div className="product-details-wrapper">
          <h2 data-testid="product-detail-name">{title}</h2>
          <img src={thumbnail} alt="Imagem do produto" />
          {this.cartQuantityRender()}
          <p> Preço: R${price} </p>
          {this.buttonsRender()}
        </div>
        <Review
          handleSubmit={this.handleSubmit}
          reviewInput={reviewInput}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default ProductDetails;
