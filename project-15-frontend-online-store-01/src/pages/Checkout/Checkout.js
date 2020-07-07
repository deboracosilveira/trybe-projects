import React from 'react';
// import ProductsCheckout from '../Checkout/ProductsCheckout';
import CheckoutForm from '../Checkout/CheckoutForm';

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      paymentMethod: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  render() {
    const { fullname, email, cpf, phone, cep, address, paymentMethod } = this.state;

    return (
      <div>
        {/* <ProductsCheckout /> */}
        <CheckoutForm
          changeHandler={this.changeHandler}
          fullname={fullname}
          email={email}
          cpf={cpf}
          phone={phone}
          cep={cep}
          address={address}
          paymentMethod={paymentMethod}
        />
      </div>
    );
  }
}

export default Checkout;
