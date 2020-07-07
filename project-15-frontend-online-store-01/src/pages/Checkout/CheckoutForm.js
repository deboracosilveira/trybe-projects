import React from 'react';

class CheckoutForm extends React.Component {
  newInputElement(name, labelName, testid, value) {
    return (
      <label htmlFor={name}>
        {labelName}
        <input
          data-testid={testid}
          type="text"
          name={name}
          value={value}
          onChange={(event) => this.props.changeHandler(event)}
        />
      </label>
    );
  }

  render() {
    const { fullname, email, cpf, phone, cep, address } = this.props;
    return (
      <form>
        <div>
          <h3>DIGITE SEUS DADOS PARA FINALIZAR A COMPRA</h3>
          <form>
            {this.newInputElement('fullname', 'Nome Completo', 'checkout-fullname', fullname)}
            {this.newInputElement('email', 'Email', 'checkout-email', email)}
            {this.newInputElement('cpf', 'CPF', 'checkout-cpf', cpf)}
            {this.newInputElement('phone', 'Telefone', 'checkout-phone', phone)}
            {this.newInputElement('cep', 'CEP', 'checkout-cep', cep)}
            {this.newInputElement('address', 'Endereço', 'checkout-address', address)}
          </form>
        </div>
      </form>
    );
  }
}

export default CheckoutForm;
